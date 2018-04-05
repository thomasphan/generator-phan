'use strict';

describe('<%= componentName %> component', () => {
  let $componentController;
  let $state;

  beforeEach(module('<%= moduleName %>'));

  beforeEach(
    inject(_$componentController_ => $componentController = _$componentController_)
  );

  beforeEach(
    inject($injector => $state = $injector.get('$state'))
  );

  it('should define <%= componentName %> state', () => {
    const bindings = {};
    const $ctrl = $componentController('<%= componentName %>', null, bindings);

    const state = _.find(
      $state.get(),
      {
        component: '<%= componentName %>',
        name: '<%= componentName %>',
        url: '/<%= componentName %>',
      }
    );

    expect(state).toBeDefined();
  });
});