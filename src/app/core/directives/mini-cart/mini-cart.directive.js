'use strict';

import miniCartTpl from './mini-cart.tpl.html';
import miniCartStyle from './mini-cart.style.scss';

export default function (app) {

    app.directive('miniCartWidget', miniCart);

    function miniCart ($rootScope) {
        'ngInject';

        return {
            restrict: 'E',
            scope : {
                page : '=',
                product : '='
            },
            templateUrl : miniCartTpl,
            compile: function (tElement, tAttrs) {
                return function ($scope) {
                    $scope.goCheckout = function(){
                        $rootScope.$broadcast('$product.goCheckout',$scope.product);
                    }
                };
            }
        };
    }
}