'use strict';

import route from './product.route';
import style from './product.style.scss';

const productPageModule = angular.module('product-module', [
  'ui.router'
]);

productPageModule
    .config(route);

export default productPageModule;
