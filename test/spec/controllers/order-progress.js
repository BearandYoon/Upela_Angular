'use strict';

describe('Controller: OrderProgressCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var OrderProgressCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderProgressCtrl = $controller('OrderProgressCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderProgressCtrl.awesomeThings.length).toBe(3);
  });
});
