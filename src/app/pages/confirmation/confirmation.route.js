'use strict';

import confirmationTpl from './confirmation.tpl.html';
import confirmationController from './confirmation.controller';

function routeConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('confirmation', {
            url: '/confirmation',
            params: {
                fullName :false, productName :false
            },
            templateUrl: confirmationTpl,
            controller: confirmationController,
            controllerAs: 'confirmation'
        });

}

export default routeConfig;
