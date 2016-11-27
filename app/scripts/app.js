'use strict';

/**
 * @ngdoc overview
 * @name UpelaApp
 * @description
 * # UpelaApp
 *
 * Main module of the application.
 */
angular
  .module('UpelaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'pascalprecht.translate',
    'ui.bootstrap',
    'ui.select',
    'ngLodash',
    'ngIntlTelInput'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $translateProvider, ngIntlTelInputProvider) {
    $stateProvider
      .state('home', {
        url: '/index',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl',
        params: {
          shipment: null
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'ctrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'ctrl'
      })
      .state('order-progress', {
        url: '/order-progress',
        templateUrl: 'views/order-progress.html',
        controller: 'OrderProgressCtrl',
        controllerAs: 'ctrl'
      })
      .state('order-offer', {
        url: '/order-offer',
        templateUrl: 'views/order-offer.html',
        controller: 'OrderOfferCtrl',
        controllerAs: 'ctrl',
        params: {
          offers: null,
          shipment: null
        }
      })
      .state('order-order', {
        url: '/order-order',
        templateUrl: 'views/order-order.html',
        controller: 'OrderOrderCtrl',
        controllerAs: 'ctrl',
        params: {
          offers: null,
          shipment: null,
          offer_id: null
        }
      })
      .state('order-payment', {
        url: '/order-payment',
        templateUrl: 'views/order-payment.html',
        controller: 'OrderPaymentCtrl',
        controllerAs: 'ctrl'
      })
      .state('order-confirm', {
        url: '/order-confirm',
        templateUrl: 'views/order-confirm.html',
        controller: 'OrderOrderCtrl',
        controllerAs: 'ctrl'
      })
      .state('my-account', {
        url: '/my-account',
        templateUrl: 'views/my-account.html',
        controller: 'MyAccountCtrl',
        controllerAs: 'ctrl'
      })
      .state('ship-to-contact', {
        url: '/ship-to-contact',
        templateUrl: 'views/ship-to-contact.html',
        controller: 'ShipToContactCtrl',
        controllerAs: 'ctrl'
      })
      .state('mass-mailing', {
        url: '/mass-mailing',
        templateUrl: 'views/mass-mailing.html',
        controller: 'MassMailingCtrl',
        controllerAs: 'ctrl'
      })
      .state('mass-mailing-upload', {
        url: '/mass-mailing-upload',
        templateUrl: 'views/mass-mailing-upload.html',
        controller: 'MassMailingUploadCtrl',
        controllerAs: 'ctrl'
      })
      .state('my-contacts', {
        url: '/my-contacts',
        templateUrl: 'views/my-contacts.html',
        controller: 'MyContactsCtrl',
        controllerAs: 'ctrl'
      })
      .state('credit-account', {
        url: '/credit-account',
        templateUrl: 'views/credit-account.html',
        controller: 'CreditAccountCtrl',
        controllerAs: 'ctrl'
      })
      .state('my-store', {
        url: "/my-store",
        templateUrl: 'views/my-store.html',
        controller: 'MyStoreCtrl',
        controllerAs: 'ctrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'ctrl'
      })
      .state('refer-contacts', {
        url: '/refer-contacts',
        templateUrl: 'views/refer-contacts.html',
        controller: 'ReferContactsCtrl',
        controllerAs: 'ctrl'
      })
      .state('loyalty', {
        url: '/loyalty',
        templateUrl: 'views/loyalty.html',
        controller: 'LoyaltyCtrl',
        controllerAs: 'ctrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'ctrl'
      });

    $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'es'], {
      'en': 'en',
      'fr': 'fr',
      'es': 'es'
    });

    $translateProvider.fallbackLanguage('en');
    $translateProvider.determinePreferredLanguage();
    $urlRouterProvider.otherwise('/index');

    ngIntlTelInputProvider.set({initialCountry: 'fr'});
  })
  .constant('Config', {
    Language: 'language'
  })
  .run(['$rootScope', function($rootScope) {
    $rootScope.IsLoggedIn = false;
  }]);
