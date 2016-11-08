'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('MainCtrl', function ($scope, $state, MainService) {
    $scope.gotoProgress = function() {
      $state.go('order-progress');
    };

    var vm = this;

    vm.disabled = undefined;
    vm.searchEnabled = undefined;
    vm.destinationCoutry = 'France';
    vm.originCountry = 'France';
    vm.parcels = [{
      number: 1,
      weight: '',
      x: '',
      y: '',
      z: ''
    }];

    vm.parcelCount = 1;
    vm.parcelUnit = true;

    vm.countries = {};

    vm.setInputFocus = function (){
      $scope.$broadcast('UiSelectDemo1');
    };

    // Disable weekend selection
    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

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

      vm.parcels.push(parcel);
      vm.parcelCount++;
    };

    vm.removeParcel = function(index) {
      if(vm.parcelCount > 1) {
        vm.parcels.splice(index, 1);
        vm.parcelCount--;
      }
    };

    vm.switchParcelUnit = function() {
      vm.parcelUnit = !vm.parcelUnit;
    };

    $scope.today = function() {
      $scope.shipDate = new Date();
    };
    $scope.today();

    $scope.clear = function() {
      $scope.shipDate = null;
    };

    $scope.inlineOptions = {
      customClass: getDayClass,
      minDate: new Date(),
      showWeeks: true
    };

    $scope.dateOptions = {
      dateDisabled: disabled,
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
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
      $scope.shipDate = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup = {
      opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

    vm.countries = MainService.getCountries();
  });
