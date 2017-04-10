'use strict';

function CheckoutController(cartService, $state) {
    'ngInject';

    var checkout = this;

    checkout.cart = cartService.getCart();

    checkout.doConfirm = function (params) {
        console.log(checkout.formProfile);
        if (!checkout.formProfile.$invalid) {
            //TODO create a profile service and put data inside

            //temporary hack
            $state.go('confirmation', {
                fullName: checkout.formProfile.fullName.$modelValue,
                productName: checkout.cart.title
            });
        }
    };

    if (!checkout.cart.productId) {
        $state.go('catalogue');
    }

}

export default CheckoutController;
