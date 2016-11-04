'use strict';

describe('Controller: ShipToContactCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var ShipToContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShipToContactCtrl = $controller('ShipToContactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ShipToContactCtrl.awesomeThings.length).toBe(3);
  });
});
