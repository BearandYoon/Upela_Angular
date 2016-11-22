'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('MainCtrl', function ($scope, $state, MainService, $http) {
    var vm = this;

    vm.disabled = undefined;
    vm.searchEnabled = undefined;

    vm.shipment = {
      account: {
        login: '',
        password: ''
      },
      ship_from: {
        country_code: '',
        postcode: '',
        city: '',
        pro: ''
      },
      ship_to: {
        country_code: '',
        postcode: '',
        city: '',
        pro: ''
      },
      parcels: [{
        number: 1,
        weight: '',
        x: '',
        y: '',
        z: ''
      }],
      shipment_date: '',
      unit: '',
      selection: ''
    };

    vm.parcelCount = 1;
    vm.parcelUnit = true;

    vm.countries = [];
    vm.ship_to_country = 'France';
    vm.ship_from_country = 'France';
    vm.ship_to_addresses = [];
    vm.merged_ship_to_addresses = [];
    vm.ship_from_addresses = [];
    vm.merged_ship_from_addresses = [];

    vm.setInputFocus = function (){
      $scope.$broadcast('UiSelectDemo1');
    };

    vm.enable = function() {
      vm.disabled = false;
    };

    vm.disable = function() {
      vm.disabled = true;
    };

    vm.addParcel = function() {
      var parcel = {
        number: vm.parcelCount + 1,
        weight: '',
        x: '',
        y: '',
        z: ''
      };

      vm.shipment.parcels.push(parcel);
      vm.parcelCount++;
    };

    vm.removeParcel = function(index) {
      if(vm.parcelCount > 1) {
        vm.shipment.parcels.splice(index, 1);
        vm.parcelCount--;
      }
    };

    vm.switchParcelUnit = function() {
      vm.parcelUnit = !vm.parcelUnit;
    };

    $scope.today = function() {
      vm.shipment.date = new Date();
    };
    $scope.today();

    $scope.clear = function() {
      vm.shipment.date = null;
    };

     function getDayClass(data) {
      var date = data.date,
        mode = data.mode;
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i = 0; i < $scope.events.length; i++) {
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    }

    $scope.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: false
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1,
      showWeeks: false
    };

    $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.openDate = function() {
      $scope.popup.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      vm.shipment.date = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup = {
      opened: false
    };

    function getCountries() {
      MainService.getCountries(function(response) {
        vm.countries = _.uniqBy(response.data, 'country_id');
      });
    }

    getCountries();

    $scope.refreshAddresses = function(address) {
      var country_code = getCountryCodeFromName(vm.ship_to_country);
      MainService.getCityandPostcode(country_code, address, function(response) {
        console.log('getCityandPostcode = ', response);
        if(response) {
          vm.ship_to_addresses = response.data;
          mergeCityandPostcode(response.data);
        }
      });
    };

    function mergeCityandPostcode(data) {
      vm.merged_ship_to_addresses = [];
      for(var i = 0; i < data.length; i++) {
        var temp = data[i].zip_code + ', ' + data[i].city;
        vm.merged_ship_to_addresses.push(temp);
      }
    }

    function getCountryCodeFromName(name) {
      for(var i = 0; i < vm.countries.length; i++) {
        if(vm.countries[i].name === name) {
          return vm.countries[i].country_id;
        }
      }
    }

    vm.offer = function() {
      vm.shipment.ship_from.country_code = getCountryCodeFromName(vm.ship_from_country);
      vm.shipment.ship_to.country_code = getCountryCodeFromName(vm.ship_to_country);
      console.log('shipment = ', vm.shipment);
      $state.go('order-progress');
    };

    vm.createAccount = function() {
      $state.go('register');
    };
  });
