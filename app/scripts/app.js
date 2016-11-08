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
    'ui.select'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'ctrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .state('order-progress', {
        url: '/order-progress',
        templateUrl: 'views/order-progress.html',
        controller: 'OrderProgressCtrl'
      })
      .state('order-offer', {
        url: '/order-offer',
        templateUrl: 'views/order-offer.html',
        controller: 'OrderOfferCtrl'
      })
      .state('order-order', {
        url: '/order-order',
        templateUrl: 'views/order-order.html',
        controller: 'OrderOrderCtrl'
      })
      .state('order-payment', {
        url: '/order-payment',
        templateUrl: 'views/order-payment.html',
        controller: 'OrderPaymentCtrl'
      })
      .state('order-confirm', {
        url: '/order-confirm',
        templateUrl: 'views/order-confirm.html',
        controller: 'OrderOrderCtrl'
      })
      .state('my-account', {
        url: '/my-account',
        templateUrl: 'views/my-account.html',
        controller: 'MyAccountCtrl'
      })
      .state('ship-to-contact', {
        url: '/ship-to-contact',
        templateUrl: 'views/ship-to-contact.html',
        controller: 'ShipToContactCtrl'
      })
      .state('mass-mailing', {
        url: '/mass-mailing',
        templateUrl: 'views/mass-mailing.html',
        controller: 'MassMailingCtrl'
      })
      .state('mass-mailing-upload', {
        url: '/mass-mailing-upload',
        templateUrl: 'views/mass-mailing-upload.html',
        controller: 'MassMailingUploadCtrl'
      })
      .state('my-contacts', {
        url: '/my-contacts',
        templateUrl: 'views/my-contacts.html',
        controller: 'MyContactsCtrl'
      })
      .state('credit-account', {
        url: '/credit-account',
        templateUrl: 'views/credit-account.html',
        controller: 'CreditAccountCtrl'
      })
      .state('my-store', {
        url: "/my-store",
        templateUrl: 'views/my-store.html',
        controller: 'MyStoreCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .state('refer-contacts', {
        url: '/refer-contacts',
        templateUrl: 'views/refer-contacts.html',
        controller: 'ReferContactsCtrl'
      })
      .state('loyalty', {
        url: '/loyalty',
        templateUrl: 'views/loyalty.html',
        controller: 'LoyaltyCtrl'
      })
      .state('/about', {
        url: 'about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });

    $translateProvider.registerAvailableLanguageKeys(['en', 'fr', 'es'], {
      'en': 'en',
      'fr': 'fr',
      'es': 'es'
    });

    $translateProvider.fallbackLanguage('en');
    $translateProvider.determinePreferredLanguage();
    $urlRouterProvider.otherwise('');
  })
  .constant('Config', {
    Language: 'language'
  })
  .run(['$rootScope', function($rootScope) {
    $rootScope.IsLoggedIn = false;
  }]);
