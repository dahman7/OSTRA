'use strict';

const shared = angular.module('core.shared', []);

import minicartDirective from './directives/mini-cart/mini-cart.directive';

import constants from './services/constants';

import restClient from './services/rest.client';
import cartService from './services/cart.service';
import thumbnail from './filters/thumbnail.filter';

minicartDirective(shared);

constants(shared);
restClient(shared);
cartService(shared);
thumbnail(shared);


export default shared;
