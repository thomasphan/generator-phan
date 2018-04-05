'use strict';

describe('<%= componentName %> component', () => {
  let $componentController;

  beforeEach(module('<%= moduleName %>'));

  beforeEach(
    inject(_$componentController_ => $componentController = _$componentController_)
  );

  it('should do something', () => {
    const bindings = {};
    const $ctrl = $componentController('<%= componentName %>', null, bindings);
  });
});