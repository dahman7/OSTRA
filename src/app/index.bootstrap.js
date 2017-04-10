'use strict';


// vendor files
import "./index.vendor";

// main App module
import "./index.module";

import "../assets/styles/sass/index.scss";

angular.element(document).ready(() => {
  angular.bootstrap(document, ['OSTRA'], {
    strictDi: true
  });
});
