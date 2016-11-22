'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderOrderCtrl
 * @description
 * # OrderOrderCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderOrderCtrl', function ($scope) {
    var vm = this;

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

    vm.shipment = {
      account: {
        login: '',
        password: ''
      },
      shipment_id: '',
      ship_from: {
        company: '',
        name: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        address3: '',
        country_code: '',
        postcode: '',
        city: '',
        pro: ''
      },
      ship_to: {
        company: '',
        name: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        address3: '',
        country_code: '',
        postcode: '',
        city: '',
        pro: ''
      },
      reason: '',
      content: '',
      label_format: ''
    };

    vm.waybill = function() {
      console.log('shipment-waybill = ', vm.shipment);
    };
  });
