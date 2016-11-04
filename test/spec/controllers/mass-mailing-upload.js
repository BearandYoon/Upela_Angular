'use strict';

describe('Controller: MassMailingUploadCtrl', function () {

  // load the controller's module
  beforeEach(module('UpelaApp'));

  var MassMailingUploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MassMailingUploadCtrl = $controller('MassMailingUploadCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MassMailingUploadCtrl.awesomeThings.length).toBe(3);
  });
});
