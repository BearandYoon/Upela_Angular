'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderPaymentCtrl
 * @description
 * # OrderPaymentCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderPaymentCtrl', function ($scope, $state, $stateParams, MainService) {
    var vm = this;
    vm.offers = $stateParams.offers;
    vm.origin_shipment = $stateParams.shipment;
    vm.offer_id = $stateParams.offer_id;
    vm.waybill = $stateParams.waybill;
    vm.shipping_info = $stateParams.shipping_info;
    vm.selected_offer = '';

    console.log('OrderPaymentCtrl = ', vm.waybill);

    if(!vm.offers || !vm.origin_shipment || !vm.waybill || !vm.offer_id || !vm.shipping_info) {
      $state.go('order-order', {shipment: vm.origin_shipment, offers: vm.offers, offer_id: vm.offer_id, shipping_info: vm.shipping_info});
    }

    for(var i = 0; i < vm.offers.offers.length; i++) {
      if(vm.offers.offers[i].id === vm.offer_id) {
        vm.selected_offer = vm.offers.offers[i];
        vm.selected_offer.carrier_logo = 'images/carriers/logo-' + vm.offers.offers[i].carrier_code.toLowerCase() + '.png';
        console.log('selected_offfer = ', vm.selected_offer);
      }
    }

    vm.remakeShipment = function() {
      $state.go('home', {shipment: vm.origin_shipment});
    };

    vm.remakeOffer = function() {
      $state.go('order-offer', {shipment: vm.origin_shipment, offers: vm.offers});
    };

    vm.remakeOrder = function() {
      $state.go('order-order', {shipment: vm.origin_shipment, offers: vm.offers, offer_id: vm.offer_id, shipping_info: vm.shipping_info});
    };
   });
