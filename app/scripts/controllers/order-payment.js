'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderPaymentCtrl
 * @description
 * # OrderPaymentCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderPaymentCtrl', function ($scope, $state) {
    $scope.clickPayment = function() {
      $state.go('my-account');
    }
   });
