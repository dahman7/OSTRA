'use strict';


function ConfirmationController($state,$stateParams) {
    'ngInject';

   var confirmation = this;

    if (!$stateParams.fullName || !$stateParams.productName) {
        $state.go('catalogue');
    }

    confirmation.fullName = $stateParams.fullName ;
    confirmation.productName = $stateParams.productName ;

}

export default ConfirmationController;
