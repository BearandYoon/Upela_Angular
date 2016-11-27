'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('MainCtrl', function ($scope, $state, MainService, $stateParams) {
    var vm = this;

    vm.disabled = undefined;
    vm.searchEnabled = undefined;

    vm.parcelCount = 1;
    vm.parcelUnit = true;
    vm.shipment_date = new Date();

    vm.countries = [];
    vm.ship_to_country = 'France';
    vm.ship_from_country = 'France';
    vm.ship_to_addresses = '';
    vm.merged_ship_to_addresses = [];
    vm.ship_from_addresses = '';
    vm.merged_ship_from_addresses = [];

    if($stateParams.shipment) {
      vm.shipment = $stateParams.shipment;

      if(vm.shipment.unit === 'fr') {
        vm.parcelUnit = true;
      } else {
        vm.parcelUnit = false;
      }

      vm.shipment_date = new Date(vm.shipment.shipment_date);

      vm.ship_from_addresses = vm.shipment.ship_from.from_address;
      vm.ship_to_addresses = vm.shipment.ship_to.to_address;

      vm.ship_from_country = vm.shipment.ship_from.country_name;
      vm.ship_to_country = vm.shipment.ship_to.country_name;

      vm.parcelCount = vm.shipment.parcels.length;
    } else {
      vm.shipment = {
        account: {
          login: 'hugo.rusek@oqios.com',
          password: 'yoon1104'
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
        unit: 'fr',
        selection: 'all'
      };
    }

    var country_code = MainService.getCountryCode();

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

    $scope.clear = function() {
      vm.shipment_date = null;
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
      vm.shipment_date = new Date(year, month, day);
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

    $scope.refreshFromAddresses = function(address) {
      var country_code = getCountryIDFromName(vm.ship_from_country);
      MainService.getCityandPostcode(country_code, address, function(response) {
        if(response) {
          mergeFromCityandPostcode(response.data);
        }
      });
    };

    $scope.refreshToAddresses = function(address) {
      var country_code = getCountryIDFromName(vm.ship_to_country);
      MainService.getCityandPostcode(country_code, address, function(response) {
        if(response) {
          mergeToCityandPostcode(response.data);
        }
      });
    };

    function mergeFromCityandPostcode(data) {
      vm.merged_ship_from_addresses = [];
      for(var i = 0; i < data.length; i++) {
        var temp = data[i].zip_code + ', ' + data[i].city;
        vm.merged_ship_from_addresses.push(temp);
      }
    }

    function mergeToCityandPostcode(data) {
      vm.merged_ship_to_addresses = [];
      for(var i = 0; i < data.length; i++) {
        var temp = data[i].zip_code + ', ' + data[i].city;
        vm.merged_ship_to_addresses.push(temp);
      }
    }

    function getCountryIDFromName(name) {
      for(var i = 0; i < vm.countries.length; i++) {
        if(vm.countries[i].name === name) {
          return vm.countries[i].country_id;
        }
      }
    }

    function splitCityandPostcode() {
      var tempString = vm.ship_from_addresses;
      var n = tempString.search(',');
      vm.shipment.ship_from.from_address = vm.ship_from_addresses;
      vm.shipment.ship_from.postcode = tempString.substr(0, n);
      vm.shipment.ship_from.city = tempString.substr(n+2);

      tempString = vm.ship_to_addresses;
      n = tempString.search(',');
      vm.shipment.ship_to.to_address = vm.ship_to_addresses;
      vm.shipment.ship_to.postcode = tempString.substr(0, n);
      vm.shipment.ship_to.city = tempString.substr(n+2);
    }

    function getCountryCodeFromName(name) {
      for(var i = 0; i < country_code.length; i++) {
        if(country_code[i].name === name) {
          return country_code[i].code;
        }
      }
    }

    vm.offer = function() {
      splitCityandPostcode();

      if(vm.parcelUnit) {
        vm.shipment.unit = 'fr';
      } else {
        vm.shipment.unit = 'us';
      }

      vm.shipment.shipment_date = vm.shipment_date.getFullYear() + '-' + (vm.shipment_date.getMonth() + 1) + '-' + vm.shipment_date.getDate();

      vm.shipment.ship_from.country_name = vm.ship_from_country;
      vm.shipment.ship_to.country_name = vm.ship_to_country;
      vm.shipment.ship_from.country_code = getCountryCodeFromName(vm.ship_from_country);
      vm.shipment.ship_to.country_code = getCountryCodeFromName(vm.ship_to_country);

      MainService.getOffers(vm.shipment);
      //$state.go('order-progress');
    };

    vm.createAccount = function() {
      $state.go('register');
    };
  });
