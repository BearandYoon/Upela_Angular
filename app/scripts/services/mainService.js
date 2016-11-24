'use strict';

/**
 * @ngdoc service
 * @name UpelaApp.OurService
 * @description
 * # OurService
 * Service in the UpelaApp.
 */
angular.module('UpelaApp')
  .service('MainService', function ($http, $state) {
    var BaseUrl = 'https://www.upela.com/api/v3/';
    var Shipment = '';
    var Offers = '';

    function getCountries(callback) {
      var url = BaseUrl + 'get_countries/';
      return $http.post(url, '').then(
        function successCallback(response) {
          callback(response);
        }, function errorCallback() {
          callback(false);
        }
      );
    }

    function getCityandPostcode(country, city, callback) {
      var url = 'https://www.upela.com/fr/account/getcitiesbyname.php?city=' + city + '&country_id=' + country;
      return $http.post(url, '').then(
        function successCallback(response) {
          callback(response);
        }, function errorCallback() {
          callback(false);
        }
      );
    }

    function getOffers(shipment) {
      $state.go('order-progress');
      var url = BaseUrl + 'rate/';
      return $http.post(url, shipment).then(
        function successCallback(response) {
          $state.go('order-offer', {offers: response.data, shipment: shipment});
          console.log('getOffers-response = ', response);
          Shipment = shipment;
          Offers = response.data;
        }, function errorCallback() {
          $state.go('home');
        }
      );
    }

    function selectOffer(offer) {
      var url = BaseUrl + 'select_offer/';
      return $http.post(url, offer).then(
        function successCallback(response) {
          $state.go('order-order');
          console.log('selectOffer-response = ', response);
        }, function errorCallback() {
          console.log('selectOffer-response-error = ', response);
          $state.go('order-offer');
        }
      );
    }

    return ({
      getCountries: getCountries,
      getOffers: getOffers,
      getCityandPostcode: getCityandPostcode,
      selectOffer: selectOffer
    });
  });
