'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:MyAccountCtrl
 * @description
 * # MyAccountCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('MyAccountCtrl', function ($scope, MainService) {
    var vm = this;
    vm.disabled = undefined;
    vm.searchEnabled = undefined;
    vm.destinationCoutry = 'France';
    vm.originCountry = 'France';

    vm.countries = MainService.getCountries();
  });
