'use strict';

import route from './catalogue.route';
import style from './catalogue.style.scss';

const cataloguePageModule = angular.module('catalogue-module', [
  'ui.router'
]);

cataloguePageModule
    .config(route);

export default cataloguePageModule;
