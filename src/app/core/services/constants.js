'use strict';

export default function (app) {
    app
        .constant('CONFIG', {
            'SERVER_BASEURL' :'http://localhost:3000'
        })
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        });
}
