'use strict';

import route from './confirmation.route';

const confirmationPageModule = angular.module('confirmation-module', [
  'ui.router'
]);

confirmationPageModule
    .config(route);

export default confirmationPageModule;
