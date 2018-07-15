'use strict';

import module from 'Src/module';
import * as defaultTemplateUrl from './template.pug';
import {
  cond,
  pipe,
} from 'lodash/fp';

const name = '<%= componentName %>';
export default name;

const bindings = {
  // flex: '@',
  // layout: '@',
};

function controller(
  // $ngRedux
) {
  'ngInject';

  const $ctrl = this;

  $ctrl.$onChanges = () => {};

  /* $ctrl.$onDestroy = $ngRedux.connect(state => {
    const isAdmin = state.isAdmin.value;

    return { isAdmin };
  })($ctrl); */
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