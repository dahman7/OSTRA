// BASE SETUP
// =============================================================================

var fs = require('fs');
var http = require('http');
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./app/config');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port


//Global functions

app.locals.getJsonFiles= function(file,callback) {
   var filePath = path.join(__dirname, 'app/data/', file);
   var encoding = 'utf8';
   if (app.locals.dataJson && app.locals.dataJson[file]) {
      //using file from memory
      callback();
   } else {
      fs.readFile(filePath, encoding, function (err, data) {
         if (!err) {
            var jsonParsed = JSON.parse(data);
            //put file in memory
            if (!app.locals.dataJson) {
               app.locals.dataJson = [];
            }
            app.locals.dataJson[file] = jsonParsed;
            callback();
         } else {
            callback(err);
         }
      });
   }
};

// ROUTES FOR OUR API
// =============================================================================

// REGISTER OUR ROUTES -------------------------------

config.getGlobbedFiles('./app/**/*.route.js').forEach(function(routePath) {
   require(path.resolve(routePath))(app);
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('server launched on port ' + port);