'use strict';

describe('Controller: OrderOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var OrderOrderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderOrderCtrl = $controller('OrderOrderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderOrderCtrl.awesomeThings.length).toBe(3);
  });
});
