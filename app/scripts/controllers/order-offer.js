'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderOfferCtrl
 * @description
 * # OrderOfferCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderOfferCtrl', function ($scope, $state, $stateParams) {
    $scope.clickChoose = function() {
      $state.go('order-order');
    };

    console.log('offers = ', $stateParams.offers);

    var vm = this;
    vm.offers = $stateParams.offers;

    if(!vm.offers) {
      $state.go('home');
    }
  });
