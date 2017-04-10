"use strict";


export default function (app) {

    app
        .service('cartService', cartService);

    function cartService($rootScope,$q) {
        "ngInject";
        var service = this ;
        var cartProducts = {};

        service.getCart = function () {
            return cartProducts;
        };
        service.setCart = function (newProduct) {
            var deferred = $q.defer();

            cartProducts = newProduct;

            deferred.resolve(true);
            return deferred.promise;
        };
        service.getproductId = function () {
            return cartProducts.id;
        };


        return service;

    }
};
