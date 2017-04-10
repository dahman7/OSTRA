'use strict';

import checkoutTpl from './checkout.tpl.html';
import checkoutController from './checkout.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('checkout', {
      url: '/checkout',
      templateUrl: checkoutTpl,
      controller: checkoutController,
      controllerAs: 'checkout'
    });

}

export default routeConfig;
