'use strict';

import route from './checkout.route';

const checkoutPageModule = angular.module('checkout-module', [
  'ui.router'
]);


checkoutPageModule
    .config(route);


export default checkoutPageModule;
