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
    vm.countries = [];
    vm.ship_to_country = 'France';

    function getCountries() {
      MainService.getCountries(function(response) {
        vm.countries = _.uniqBy(response.data, 'country_id');
      });
    }

    getCountries();

    vm.business_address = 1;

    vm.parcelUnit = true;
    vm.switchParcelUnit = function() {
      vm.parcelUnit = !vm.parcelUnit;
    };

    vm.dimensions = [];

    vm.dimensionCount = 0;
    vm.addDimension = function() {
      var dimension = {
        name: '',
        x: '',
        y: '',
        z: ''
      };

      vm.dimensions.push(dimension);
      vm.dimensionCount++;
    };

    vm.removeDimension = function(index) {
      if(vm.dimensionCount > 0) {
        vm.dimensions.splice(index, 1);
        vm.dimensionCount--;
      }
    };
  });
