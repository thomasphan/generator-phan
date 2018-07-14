'use strict';

import * as angular from 'angular';

const dependencies = [];

const module = angular.module('app', dependencies);

const bootstrap = () => angular.bootstrap(document, [module.name]);

angular.element(document).ready(bootstrap);

export default module;