'use strict';

function CatalogueController(restClient) {
    'ngInject';

    var catalogue = this ;

    restClient.all('api').one('getCatalogueList').get().then(function(data){
        catalogue.productsList = data.products;
    })


}

export default CatalogueController;
