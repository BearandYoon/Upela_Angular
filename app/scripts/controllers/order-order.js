'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderOrderCtrl
 * @description
 * # OrderOrderCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderOrderCtrl', function ($scope, $state) {
    $scope.clickContinue = function() {
      $state.go('order-payment');
    }
  });
