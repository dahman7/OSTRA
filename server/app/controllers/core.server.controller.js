'use strict';

/**
* function default
* @return get a basic json response
*/
exports.default = function(req, res) {
    res.json({ message: 'Hello! welcome to our api!' });
};

/**
* get user profile data from json file
* @param {object} req
* @param {object} res
* @return {object} json data
*/
exports.getCatalogueList = function(req, res) {
    req.app.locals.getJsonFiles('catalogue.json',function(err){
        if(err){
            res.json({ error: err });
        }else{
            res.json(req.app.locals.dataJson['catalogue.json']);
        }
    });

};

/**
* get dataGrid data from json file
* @param {object} req
* @param {object} res
* @return {object} json data
*/
exports.getProduct = function(req, res) {
    var params = [];

    if(req.query.productId){
        params.productId =  req.query.productId;
    }

    req.app.locals.getJsonFiles('catalogue.json',function(err){
        if(err){
            res.json({ error: err });
        }else{
            var products = req.app.locals.dataJson['catalogue.json'].products;
            for (var key in products) {
                if(products[key].productId == params.productId){
                    res.json(products[key]);
                }else if(key == products.length){
                    res.json({ error: 'Product not found!' });
                }
            }

        }
    });
};
