'use strict';

describe('Controller: CreditAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var CreditAccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreditAccountCtrl = $controller('CreditAccountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CreditAccountCtrl.awesomeThings.length).toBe(3);
  });
});
