'use strict';

describe('Controller: MassMailingCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var MassMailingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MassMailingCtrl = $controller('MassMailingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MassMailingCtrl.awesomeThings.length).toBe(3);
  });
});
