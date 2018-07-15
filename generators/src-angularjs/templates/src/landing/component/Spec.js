'use strict';

describe('landing component', () => {
  let $componentController;

  beforeEach(module('app'));

  beforeEach(
    inject(_$componentController_ => $componentController = _$componentController_)
  );

  it('should do something', () => {
    const bindings = {};
    const $ctrl = $componentController('landing', null, bindings);
  });
});