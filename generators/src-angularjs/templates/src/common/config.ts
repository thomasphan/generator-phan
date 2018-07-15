'use strict';

import module from 'Src/module';

module.config(config);

function config(
  $locationProvider,
  $mdAriaProvider,
  $sceProvider,
  $urlMatcherFactoryProvider,
) {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $mdAriaProvider.disableWarnings();

  $sceProvider.enabled(false);

  $urlMatcherFactoryProvider.strictMode(false);
}