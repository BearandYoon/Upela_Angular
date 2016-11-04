'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderProgressCtrl
 * @description
 * # OrderProgressCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderProgressCtrl', function ($scope, $state) {
    $scope.clickImage = function() {
      $state.go('order-offer');
    }
  });
