'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('SettingsCtrl', function (MainService) {
    var vm = this;
    vm.disabled = undefined;
    vm.searchEnabled = undefined;
    vm.destinationCoutry = 'France';
    vm.originCountry = 'France';

    vm.countries = MainService.getCountries();
  });
