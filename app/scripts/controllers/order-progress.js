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
    var vm = this;
    vm.progressValue = 100;

    $scope.clickImage = function() {
      $state.go('order-offer');
    };
  });
