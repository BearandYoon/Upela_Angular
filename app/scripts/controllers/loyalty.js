'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:LoyaltyCtrl
 * @description
 * # LoyaltyCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('LoyaltyCtrl', function (MainService) {
    var vm = this;
    vm.disabled = undefined;
    vm.searchEnabled = undefined;
    vm.destinationCoutry = 'France';
    vm.originCountry = 'France';

    vm.countries = MainService.getCountries();
  });
