'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:MyContactsCtrl
 * @description
 * # MyContactsCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('MyContactsCtrl', function (MainService) {
    var vm = this;
    vm.disabled = undefined;
    vm.searchEnabled = undefined;
    vm.destinationCoutry = 'France';
    vm.originCountry = 'France';

    vm.countries = MainService.getCountries();
  });
