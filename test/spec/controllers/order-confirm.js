'use strict';

describe('Controller: OrderConfirmCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var OrderConfirmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderConfirmCtrl = $controller('OrderConfirmCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderConfirmCtrl.awesomeThings.length).toBe(3);
  });
});
