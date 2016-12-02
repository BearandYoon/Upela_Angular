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

    vm.ship_from_country = 'France';

    function getCountries() {
      MainService.getCountries(function(response) {
        vm.countries = _.uniqBy(response.data, 'country_id');
      });
    }

    getCountries();
  });
