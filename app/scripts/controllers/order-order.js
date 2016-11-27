'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderOrderCtrl
 * @description
 * # OrderOrderCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderOrderCtrl', function ($scope, $state, $stateParams, MainService) {
    var vm = this;
    vm.offers = $stateParams.offers;
    vm.origin_shipment = $stateParams.shipment;
    vm.selected_offerId = $stateParams.offer_id;
    vm.selected_offer = '';
    console.log('offer_id = ', vm.selected_offerId);

    if(!vm.offers || !vm.origin_shipment) {
      $state.go('order-offer', {shipment: vm.origin_shipment, offers: vm.offers});
    }

    for(var i = 0; i < vm.offers.offers.length; i++) {
      if(vm.offers.offers[i].id === vm.selected_offerId) {
        vm.selected_offer = vm.offers.offers[i];
      }
    }

    vm.shipment = {
      account: {
        login: 'hugo.rusek@oqios.com',
        password: 'yoon1104'
      },
      shipment_id: vm.offers.shipment_id,
      ship_from: {
        company: '',
        name: '',
        phone: '',
        email: '',
        address1: '',
        address2: '',
        address3: '',
        country_code: vm.origin_shipment.ship_from.country_code,
        conntry_name: vm.origin_shipment.ship_from.country_name,
        postcode: vm.origin_shipment.ship_from.postcode,
        city: vm.origin_shipment.ship_from.city,
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
        country_code: vm.origin_shipment.ship_to.country_code,
        conntry_name: vm.origin_shipment.ship_to.country_name,
        postcode: vm.origin_shipment.ship_to.postcode,
        city: vm.origin_shipment.ship_to.city,
        pro: ''
      },
      reason: '',
      content: '',
      label_format: 'PDF'
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
      $scope.shipDate = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup = {
      opened: false
    };

    vm.waybill = function() {
      console.log('shipment-waybill = ', vm.shipment);
      MainService.waybill(vm.shipment);
    };

    vm.remakeShipment = function() {
      $state.go('home', {shipment: vm.origin_shipment});
    };

    vm.remakeOffer = function() {
      $state.go('order-offer', {shipment: vm.origin_shipment, offers: vm.offers});
    };
  });
