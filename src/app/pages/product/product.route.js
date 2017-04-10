'use strict';

import productTpl from './product.tpl.html';
import productController from './product.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('product', {
      url: '/product?id',
      templateUrl: productTpl,
      controller: productController,
      controllerAs: 'product'
    });

}

export default routeConfig;
