"use strict";


export default function (app) {

    app
        .service('restClient', restClient);

    function restClient(CONFIG, Restangular) {
        "ngInject";

        return Restangular.withConfig(function (RestangularConfigurer) {

            RestangularConfigurer.setBaseUrl(CONFIG.SERVER_BASEURL);

            RestangularConfigurer.setDefaultHeaders({
                "Content-type": "application/vnd.api+json",
                "Accept": "application/vnd.api+json"
            });

            RestangularConfigurer.setFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {

                return {
                    element: element,
                    params: params,
                    headers: headers,
                    httpConfig: httpConfig
                };
            });

            RestangularConfigurer.addResponseInterceptor(function (payload, operation, what, url, response, deferred) {

                console.debug('restClient success interceptor ', payload);

                return payload;
            });

            RestangularConfigurer.setErrorInterceptor(function (response, deferred, responseHandler) {
                console.debug('restClient error interceptor ', response);
                if (response.data && response.data.errors) {
                    return deferred.reject(response.data.errors); // error not handled
                }
                return deferred.reject([
                    {
                        code: "RESTANGULAR_UNKNOWN_ERROR"
                    }
                ]);
            });

        });

    }
};
