'use strict';

describe('Controller: LoyaltyCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var LoyaltyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoyaltyCtrl = $controller('LoyaltyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LoyaltyCtrl.awesomeThings.length).toBe(3);
  });
});
