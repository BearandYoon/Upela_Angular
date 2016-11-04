'use strict';

describe('Directive: searchSelector', function () {

  // load the directive's module
  beforeEach(module('UpelaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-selector></search-selector>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchSelector directive');
  }));
});
