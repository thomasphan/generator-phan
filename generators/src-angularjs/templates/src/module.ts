'use strict';

import * as angular from 'angular';
import '@uirouter/angularjs';
import 'angular-material';
import 'ng-redux';

const dependencies = [
  'ngMaterial',
  'ngRedux',
  'ui.router',
];

const module = angular.module('app', dependencies);

const bootstrap = () => angular.bootstrap(document, [module.name]);

angular.element(document).ready(bootstrap);

export default module;