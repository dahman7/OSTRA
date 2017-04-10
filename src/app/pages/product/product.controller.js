'use strict';

function ProductController($scope,$state,$stateParams,restClient,cartService) {
    'ngInject';

    var product = this ;
    var params = [];

    if($stateParams.id){
        params.productId = $stateParams.id;
    }else{
        $state.go('catalogue');
    }
    restClient.all('api').one('getProduct').get(params).then(function(data){
        product.data = data.plain();
    })

    $scope.$on('$product.goCheckout',function(event,data){
        cartService.setCart(data).then(function(){
            $state.go('checkout');
        });
    })
}

export default ProductController;
