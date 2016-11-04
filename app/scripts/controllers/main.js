'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('MainCtrl', function ($scope, $state, MainService, $http, $timeout, $interval) {
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

    vm.countries = {};

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

    };

    $scope.today = function() {
      $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
      $scope.dt = null;
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

    // Disable weekend selection
    function disabled(data) {
      var date = data.date,
        mode = data.mode;
      return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
      $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
      $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
      $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
      $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
      $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
      opened: false
    };

    $scope.popup2 = {
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

    vm.countries = MainService.getCountries();
  });
