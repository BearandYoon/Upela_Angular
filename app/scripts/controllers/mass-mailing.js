'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:MassMailingCtrl
 * @description
 * # MassMailingCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('MassMailingCtrl', function ($scope, MainService) {
    var vm = this;
    vm.disabled = undefined;
    vm.searchEnabled = undefined;
    vm.destinationCoutry = 'France';
    vm.originCountry = 'France';

    vm.countries = MainService.getCountries();
  });
