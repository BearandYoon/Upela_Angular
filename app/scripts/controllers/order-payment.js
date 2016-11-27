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
    console.log('OrderPaymentCtrl = ', vm.waybill);

    if(!vm.offers || !vm.origin_shipment || !vm.waybill || vm.offer_id) {
      $state.go('order-order', {shipment: vm.origin_shipment, offers: vm.offers, offer_id: vm.offer_id});
    }

    vm.remakeShipment = function() {
      $state.go('home', {shipment: vm.origin_shipment});
    };

    vm.remakeOffer = function() {
      $state.go('order-offer', {shipment: vm.origin_shipment, offers: vm.offers});
    };

    vm.remakeOrder = function() {
      $state.go('order-order', {shipment: vm.origin_shipment, offers: vm.offers, offer_id: vm.offer_id});
    };
   });
