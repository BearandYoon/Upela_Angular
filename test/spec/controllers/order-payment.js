'use strict';

describe('Controller: OrderPaymentCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var OrderPaymentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderPaymentCtrl = $controller('OrderPaymentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderPaymentCtrl.awesomeThings.length).toBe(3);
  });
});
