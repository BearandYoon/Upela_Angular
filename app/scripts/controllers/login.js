'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('LoginCtrl', function ($uibModalInstance, $rootScope) {
    var self = this;

    self.closeModal = function closeModal() {
      $uibModalInstance.close();
    };

    self.login = function() {
      $uibModalInstance.close();
      $rootScope.IsLoggedIn = true;
    }
  });
