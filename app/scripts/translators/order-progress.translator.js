/**
 * Created by bear on 11/9/16.
 */
(function () {

  'use strict';

  function OrderProgressTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      ORDER_PROGRESS: {
        TITLE: 'PLEASE BE PATIENT <br>WHILE WE ARE LOOKING FOR THE BEST OFFERS',
        WORLD_LOGO: 'Send your envelopes, parcels and pallets all over the world!',
        MID_LOGO: 'Did you know ?',
        FOOTER: 'BY CREATING A UPELA ACCOUNT, YOU WILL BENEFIT FROM AN IMMEDIATE DISCOUNT!'
      }
    });

    $translateProvider.translations('fr', {
      ORDER_PROGRESS: {
        TITLE: 'PLEASE BE PATIENT <br>WHILE WE ARE LOOKING FOR THE BEST OFFERS',
        WORLD_LOGO: 'Send your envelopes, parcels and pallets all over the world!',
        MID_LOGO: 'Did you know ?',
        FOOTER: 'BY CREATING A UPELA ACCOUNT, YOU WILL BENEFIT FROM AN IMMEDIATE DISCOUNT!'
      }
    });

    $translateProvider.translations('es', {
      ORDER_PROGRESS: {
        TITLE: 'PLEASE BE PATIENT <br>WHILE WE ARE LOOKING FOR THE BEST OFFERS',
        WORLD_LOGO: 'Send your envelopes, parcels and pallets all over the world!',
        MID_LOGO: 'Did you know ?',
        FOOTER: 'BY CREATING A UPELA ACCOUNT, YOU WILL BENEFIT FROM AN IMMEDIATE DISCOUNT!'
      }
    });
  }

  angular.module('UpelaApp')
    .config(OrderProgressTranslate);
})();
