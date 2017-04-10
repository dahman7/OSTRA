'use strict';

export default function (app) {
    app
        .filter('thumbnail', function () {
        return function (image) {
            if(image){
                return image.replace('.jpg', '.jpg_250x250.jpg');
            }
        };
    });
}
