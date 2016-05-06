'use strict';
describe('Filter: startFilter', function () {
  var startFilter;
  beforeEach(function () {
    // Load the filters's module
    window.window.module('vodApp');
    // Provide any mocks needed
    window.module(function ($provide) {
      //$provide.value('Name', new MockName());
    });
    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($filter) {
      startFilter= $filter('start');
    });
  });

  it('should exist', function () {
    expect(!!startFilter).to.be.true;
  });

});
