'use strict';

import module from 'Src/module';
import component from './component';

module.config(config);

function config($stateProvider) {
  'ngInject';

  const state = {
    component,
    name: component,
    // parent: 'primarySidenav',
    url: `/${component}`,
  };

  $stateProvider.state(state);

}
