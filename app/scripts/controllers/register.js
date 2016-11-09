'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('RegisterCtrl', function ($rootScope) {
    var self = this;

    self.login = function() {
      $rootScope.IsLoggedIn = true;
    }
 });
