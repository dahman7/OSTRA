'use strict';

import footerTpl from './footer.html';

function footerComponent() {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: footerTpl,
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;

  function FooterController () {
    //TODO
  }

}

export default footerComponent;
