'use strict';

describe('Filter: searchSelectorFilter', function () {

  // load the filter's module
  beforeEach(module('UpelaApp'));

  // initialize a new instance of the filter before each test
  var searchSelectorFilter;
  beforeEach(inject(function ($filter) {
    searchSelectorFilter = $filter('searchSelectorFilter');
  }));

  it('should return the input prefixed with "searchSelectorFilter filter:"', function () {
    var text = 'angularjs';
    expect(searchSelectorFilter(text)).toBe('searchSelectorFilter filter: ' + text);
  });

});
