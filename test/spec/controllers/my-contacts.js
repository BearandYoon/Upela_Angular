'use strict';

describe('Controller: MyContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var MyContactsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyContactsCtrl = $controller('MyContactsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MyContactsCtrl.awesomeThings.length).toBe(3);
  });
});
