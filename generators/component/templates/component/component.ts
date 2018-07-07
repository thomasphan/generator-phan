'use strict';

import module from 'Src/module';
import * as defaultTemplateUrl from './template.pug';
import {
  assign
} from 'lodash/fp';

const name = '<%= componentName %>';
export default name;

const bindings = {
  // flex: '@',
  // layout: '@',
};

function controller($ngRedux) {
  'ngInject';

  const $ctrl = this;

  assign($ctrl, {
    name,
  });

  $ctrl.$onDestroy = $ngRedux.connect(state => {
    // console.log(state);

    const isAdmin = state.isAdmin.value;

    return { isAdmin };
  })($ctrl);
}

module.component(name, {
  bindings,
  controller,
  templateUrl,
});

function templateUrl($attrs) {
  'ngInject';

  return $attrs.templateUrl || defaultTemplateUrl;
}