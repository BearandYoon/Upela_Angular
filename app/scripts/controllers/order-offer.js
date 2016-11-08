'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderOfferCtrl
 * @description
 * # OrderOfferCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderOfferCtrl', function ($scope, $state) {
    $scope.clickChoose = function() {
      $state.go('order-order');
    };
  });
