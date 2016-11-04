'use strict';

describe('Controller: OrderOfferCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var OrderOfferCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderOfferCtrl = $controller('OrderOfferCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrderOfferCtrl.awesomeThings.length).toBe(3);
  });
});
