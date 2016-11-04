'use strict';

describe('Controller: MyStoreCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var MyStoreCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyStoreCtrl = $controller('MyStoreCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyStoreCtrl.awesomeThings.length).toBe(3);
  });
});
