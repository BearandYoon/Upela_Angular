'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:OrderOfferCtrl
 * @description
 * # OrderOfferCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('OrderOfferCtrl', function ($state, $stateParams, MainService) {
    var vm = this;
    vm.offers = $stateParams.offers;
    vm.shipment = $stateParams.shipment;

    if(!vm.offers) {
      $state.go('home', {shipment: vm.shipment});
    }

    vm.shipment_pickup = true;
    vm.shipment_dropoff = true;
    vm.delivery_dropoff = true;
    vm.delivery_onsite = true;

    var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    function convertDateformat(inputDate) {
      var date = new Date(inputDate);
      if (!isNaN(date.getTime())) {
        // Months use 0 index.
        return date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear();
      }
    }

    function getWeekday(inputDate) {
      return weekday[new Date(inputDate).getDay()];
    }

    function buildOffersList() {
      for(var i = 0; i < vm.offers.offers.length; i++) {
        vm.offers.offers[i].carrier_logo = 'images/carriers/logo-' + vm.offers.offers[i].carrier_code.toLowerCase() + '.png';
        vm.offers.offers[i].shipment_weekday = getWeekday(vm.offers.offers[i].shipment_date);
        vm.offers.offers[i].shipment_date = convertDateformat(vm.offers.offers[i].shipment_date);
        vm.offers.offers[i].delivery_weekday = getWeekday(vm.offers.offers[i].delivery_date);
        vm.offers.offers[i].delivery_date = convertDateformat(vm.offers.offers[i].delivery_date);
      }
    }

    vm.switchShipPickup = function() {
      var temp = [];
      var tempOffer;

      for(var i = 0; i < vm.offers.offers.length; i++) {
        if (vm.shipment_pickup) {
          if (vm.shipment_dropoff) {
            tempOffer = vm.offers.offers[i];
            tempOffer.allow_pickup_flag = tempOffer.allow_pickup;
            temp.push(tempOffer);
          } else {
            if (vm.offers.offers[i].allow_pickup == vm.shipment_pickup) {
              tempOffer = vm.offers.offers[i];
              tempOffer.allow_pickup_flag = true;
              temp.push(tempOffer);
            }
          }
        } else {
          if (!vm.shipment_dropoff) {
            temp = [];
          } else {
            if (vm.offers.offers[i].allow_dropoff == vm.shipment_dropoff) {
              tempOffer = vm.offers.offers[i];
              tempOffer.allow_pickup_flag = false;
              temp.push(tempOffer);
            }
          }
        }
      }

      vm.display_offers = temp;
    };

    vm.switchDeliveryDropoff = function() {
      var temp = [];
      var tempOffer;

      for(var i = 0; i < vm.offers.offers.length; i++) {
        if (vm.delivery_onsite) {
          if (vm.delivery_dropoff) {
            tempOffer = vm.offers.offers[i];
            tempOffer.delivery_flag = tempOffer.delivery_to_collection_point;
            temp.push(tempOffer);
          } else {
            if (vm.offers.offers[i].delivery_to_collection_point == !vm.delivery_onsite) {
              tempOffer = vm.offers.offers[i];
              tempOffer.delivery_flag = false;
              temp.push(tempOffer);
            }
          }
        } else {
          if (!vm.delivery_dropoff) {
            temp = [];
          } else {
            if (vm.offers.offers[i].delivery_to_collection_point == !vm.delivery_onsite) {
              tempOffer = vm.offers.offers[i];
              tempOffer.delivery_flag = true;
              temp.push(tempOffer);
            }
          }
        }
      }

      vm.display_offers = temp;
    };

    if(vm.offers) {
      buildOffersList();
      vm.switchShipPickup();
      vm.switchDeliveryDropoff();
      vm.display_offers = vm.offers.offers;
    }

    vm.chooseOffer = function(offer) {
      var selectedOffer = {
        account: {
          login: 'hugo.rusek@oqios.com',
          password: 'yoon1104'
        },
        shipment_id: vm.offers.shipment_id,
        offer_id: offer.id
      };

      MainService.selectOffer(selectedOffer);
    };

    vm.remakeShipment = function() {
      $state.go('home', {shipment: vm.shipment});
    }
  });

