'use strict';

import module from 'Src/module';
import * as defaultTemplateUrl from './template.pug';

const name = '<%= componentName %>';
export default name;

const bindings = {
  flex: '@',
  layout: '@',
};

function controller() {
  'ngInject';

  const $ctrl = this;

  _.assign($ctrl, {
    name,
  });
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