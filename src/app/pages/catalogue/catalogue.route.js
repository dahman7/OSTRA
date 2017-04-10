'use strict';

import catalogueTpl from './catalogue.tpl.html';
import catalogueController from './catalogue.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('catalogue', {
      url: '/catalogue',
      templateUrl: catalogueTpl,
      controller: catalogueController,
      controllerAs: 'catalogue'
    });

}

export default routeConfig;
