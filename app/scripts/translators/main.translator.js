/**
 * Created by bear on 11/4/16.
 */
(function () {

  'use strict';

  function MainTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      'MAIN': {
        'TITLE': 'Upela_en',
        'MENU': {
          'PROFESSIONALS': 'Professionals',
          'SERVICES': 'Services',
          'TRACKING': 'Tracking',
          'HELP': 'Help',
          'BLOG': 'Blog',
          'CONTACT': 'Contact',
          'LOGIN': 'Login',
          'REGISTER': 'Register'
        }
      }
    });

    $translateProvider.translations('fr', {
      'MAIN': {
        'TITLE': 'Upela_fr',
        'MENU': {
          'PROFESSIONALS': 'Professionals',
          'SERVICES': 'Services',
          'TRACKING': 'Tracking',
          'HELP': 'Help',
          'BLOG': 'Blog',
          'CONTACT': 'Contact',
          'LOGIN': 'Login',
          'REGISTER': 'Register'
        }
      }
    });

    $translateProvider.translations('es', {
      'MAIN': {
        'TITLE': 'Upela_es',
        'MENU': {
          'PROFESSIONALS': 'Professionals',
          'SERVICES': 'Services',
          'TRACKING': 'Tracking',
          'HELP': 'Help',
          'BLOG': 'Blog',
          'CONTACT': 'Contact',
          'LOGIN': 'Login',
          'REGISTER': 'Register'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(MainTranslate);
})();
