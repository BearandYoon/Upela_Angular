'use strict';

describe('Controller: ReferContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var ReferContactsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReferContactsCtrl = $controller('ReferContactsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReferContactsCtrl.awesomeThings.length).toBe(3);
  });
});
