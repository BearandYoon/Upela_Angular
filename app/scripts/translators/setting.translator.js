/**
 * Created by bear on 11/11/16.
 */
(function () {

  'use strict';

  function SettingTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      SETTINGS: {
        TITLE: 'My Client Space',
        OVERALL: 'Overall view',
        SHIP: 'Ship to contact',
        MAILING: 'Mass mailing',
        SENDING: 'Sending by file',
        CONTACTS: 'My contacts',
        CREDIT: 'Credit account',
        STORE: 'My stores',
        SETTINGS: 'Settings',
        PROGRAMS: 'Our programs',
        REFERRAL: 'Referral',
        LOYALTY: 'Loyalty'
      }
    });

    $translateProvider.translations('fr', {
      SETTINGS: {
        TITLE: 'Mon Espace Client',
        OVERALL: 'Vue d\'ensemble',
        SHIP: 'Envoi contact',
        MAILING: 'Envoi en masse',
        SENDING: 'Envoi par fichier',
        CONTACTS: 'Mes contacts',
        CREDIT: 'Créditer compte',
        STORE: 'Mes boutiques',
        SETTINGS: 'Paramètres',
        PROGRAMS: 'Nos programmes',
        REFERRAL: 'Parrainage',
        LOYALTY: 'Fidélité'
      }
    });

    $translateProvider.translations('es', {
      SETTINGS: {
        TITLE: 'Mi área de cliente',
        OVERALL: 'Vista general',
        SHIP: 'Envío de contacto',
        MAILING: 'Envío masivo',
        SENDING: 'Envío por archivo',
        CONTACTS: 'Mis contactos',
        CREDIT: 'Ingrese dinero en su cuenta',
        STORE: 'Mis tiendas',
        SETTINGS: 'Parámetros',
        PROGRAMS: 'Nuestros programas',
        REFERRAL: 'Apadrinamiento',
        LOYALTY: 'Loyalty'
      }
    });
  }

  angular.module('UpelaApp')
    .config(SettingTranslate);
})();
