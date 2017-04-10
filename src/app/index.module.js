'use strict';

import components from './index.components';


import uiRouter from 'angular-ui-router';
import coreModule from './core/core.module';
import indexComponents from './index.components';
import catalogueModule from './pages/catalogue/catalogue.module';
import productModule from './pages/product/product.module';
import checkoutModule from './pages/checkout/checkout.module';
import confirmationModule from './pages/confirmation/confirmation.module';


const App = angular.module(
    "OSTRA", [
        // plugins
        uiRouter,
        "ngAnimate",
        "ngCookies",
        "ngTouch",
        "ngSanitize",
        "ngMessages",
        "restangular",
        // core
        coreModule.name,
        // components
        indexComponents.name,
        // pages
        catalogueModule.name,
        productModule.name,
        checkoutModule.name,
        confirmationModule.name

    ]
);

App
    .config(function ($logProvider, $compileProvider) {
        'ngInject';

        $logProvider.debugEnabled(true);

        if (NODE_ENV === 'production') {
            $logProvider.debugEnabled(false);
            $compileProvider.debugInfoEnabled(false);
        }
    })
    .config(function routeConfig($urlRouterProvider) {
        'ngInject';

        $urlRouterProvider.otherwise('/catalogue');
    })
    .run(function ($log) {
        'ngInject';
        $log.debug('Hello from run block!');
    });


export default App;
