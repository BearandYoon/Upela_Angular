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
        }, function errorCallback() {
          $state.go('home');
        }
      );
    }

    return ({
      getCountries: getCountries,
      getOffers: getOffers,
      getCityandPostcode: getCityandPostcode
    });
  });
