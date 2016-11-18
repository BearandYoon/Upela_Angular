/**
 * Created by bear on 11/17/16.
 */
(function () {

  'use strict';

  function LoyaltyTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      LOYALTY: {
        TITLE: {
          THE: 'The',
          LOYALTY: 'Loyalty',
          PROGRAM: 'Program by',
          GIFT: 'The more you send, <br>the more gift vouchers you get',
          COMMENT: 'with the gift vouchers'
        },
        PROGRAM: 'You would like to benefit of our Loyalty Program and get up to €200 of Tickets Kadéos* gift vouchers?',
        REGISTER_FORM: 'Nothing could be easier: you just have to subscribe by filling out this below registration form:',
        GENDER: 'Gender',
        MALE: 'Mr',
        FEMAIL: 'Mrs',
        FNAME: 'First name',
        LNAME: 'Last name',
        ADDRESS: 'Address',
        COUNTRY: 'Country',
        CITY: 'City',
        OPPORTUNITY: 'I take the opportunity',
        BENEFIT: {
          TITLE: 'voucher benefits',
          LINK: 'Ticket Kadéos® Online',
          COMMENT1: 'Easy and practical, the gift voucher is directly emailed to beneficiary;',
          COMMENT2: 'It allows an easy and secured purchase on the Internet, 24/7;',
          COMMENT3: 'Scored : can be spent in one purchase or divided into several purchases;',
          COMMENT4: 'Compatible with other additional means of payment;',
          COMMENT5: 'Access to thousands of items on 36 online shops covering various industries;',
          COMMENT6: 'The beneficiary is allowed to exchange his Ticket Kadéos® Online voucher with a Ticket Kadéos® Infini.paper gift voucher.'
        },
        RIGHT_SIDE: {
          ONLINE_SHOP: 'Ticket Kadéos® Online voucher give access to thousands of items on 36 online shops covering various industries',
          GIFT_VOUCHER: 'They are also redeemable for Ticket Kadeos Infini® paper gift vouchers',
          TERM_CONDITION: {
            TITLE: 'Terms and conditions:',
            COMMENT1: 'Offer cannot be combined with other commercial operations',
            COMMENT2: 'Valid for 12 months from the date on which the beneficiary has been emailed',
            COMMENT3: 'The Sponsored Person must not be an employee from the same company (or any subsidiary company belonging to the same group) as his Sponsor.',
            COMMENT4: 'A sponsor cannot sponsor himself',
            COMMENT: 'The email address from the Sponsored Person must be different from the email address of his Sponsor'
          },
          NOTE: 'Please note that we invite you today to add to your address book the email address of the shipper of your Kadéos gift voucher: <a href="mailto:c.lopez@upela.com">c.lopez@upela.com</a>. Also, do not forget to check your “Junk Mail” or “Spam” folders.'
        }
      }
    });

    $translateProvider.translations('fr', {
      LOYALTY: {
        TITLE: {
          THE: 'Le programme de',
          LOYALTY: 'Fidélité',
          PROGRAM: 'selon',
          GIFT: 'Plus vous envoyez plus vous gagnez',
          COMMENT: 'avec les tickets cadeaux'
        },
        PROGRAM: 'Vous souhaitez profiter de notre Programme de Fidélité et gagner jusqu\'à 200€ en Tickets Kadéos* ?',
        REGISTER_FORM: 'Pour cela, rien de plus simple, il vous suffit de vous inscrire en complétant le formulaire d\'inscription ci-dessous :',
        GENDER: 'Civilité',
        MALE: 'M.',
        FEMAIL: 'Mme',
        FNAME: 'Prénom',
        LNAME: 'Nom',
        ADDRESS: 'Adresse',
        COUNTRY: 'Pays',
        CITY: 'Ville',
        OPPORTUNITY: 'J\'en profite',
        BENEFIT: {
          TITLE: '<a href="https://www.ticketkadeosonline.fr/Presentation.aspx">Ticket Kadéos® Online</a> voucher benefits',
          COMMENT1: 'Easy and practical, the gift voucher is directly emailed to beneficiary;',
          COMMENT2: 'It allows an easy and secured purchase on the Internet, 24/7;',
          COMMENT3: 'Scored : can be spent in one purchase or divided into several purchases;',
          COMMENT4: 'Compatible with other additional means of payment;',
          COMMENT5: 'Access to thousands of items on 36 online shops covering various industries;',
          COMMENT6: 'The beneficiary is allowed to exchange his Ticket Kadéos® Online voucher with a Ticket Kadéos® Infini.paper gift voucher.'
        },
        RIGHT_SIDE: {
          ONLINE_SHOP: 'Ticket Kadéos® Online voucher give access to thousands of items on 36 online shops covering various industries',
          GIFT_VOUCHER: 'They are also redeemable for Ticket Kadeos Infini® paper gift vouchers',
          TERM_CONDITION: {
            TITLE: 'Terms and conditions:',
            COMMENT1: 'Offer cannot be combined with other commercial operations',
            COMMENT2: 'Valid for 12 months from the date on which the beneficiary has been emailed',
            COMMENT3: 'The Sponsored Person must not be an employee from the same company (or any subsidiary company belonging to the same group) as his Sponsor.',
            COMMENT4: 'A sponsor cannot sponsor himself',
            COMMENT: 'The email address from the Sponsored Person must be different from the email address of his Sponsor'
          },
          NOTE: 'Please note that we invite you today to add to your address book the email address of the shipper of your Kadéos gift voucher: <a href="mailto:c.lopez@upela.com">c.lopez@upela.com</a>. Also, do not forget to check your “Junk Mail” or “Spam” folders.'
        }
      }
    });

    $translateProvider.translations('es', {
      LOYALTY: {
        TITLE: {
          THE: 'Programa de ',
          LOYALTY: 'Fidelidad',
          PROGRAM: 'de ',
          GIFT: 'Cuanto más envié <br>más bonos regalos obtiene',
          COMMENT: 'with the gift vouchers'
        },
        PROGRAM: 'You would like to benefit of our Loyalty Program and get up to €200 of Tickets Kadéos* gift vouchers?',
        REGISTER_FORM: 'Nothing could be easier: you just have to subscribe by filling out this below registration form:',
        GENDER: 'Título',
        MALE: 'Sr.',
        FEMAIL: 'Sra.',
        FNAME: 'Nombre',
        LNAME: 'Apellido',
        ADDRESS: 'Dirección',
        COUNTRY: 'País',
        CITY: 'Ciudad',
        OPPORTUNITY: '¡Aprovecho!',
        BENEFIT: {
          TITLE: 'voucher benefits',
          LINK: 'Ticket Kadéos® Online',
          COMMENT1: 'Easy and practical, the gift voucher is directly emailed to beneficiary;',
          COMMENT2: 'It allows an easy and secured purchase on the Internet, 24/7;',
          COMMENT3: 'Scored : can be spent in one purchase or divided into several purchases;',
          COMMENT4: 'Compatible with other additional means of payment;',
          COMMENT5: 'Access to thousands of items on 36 online shops covering various industries;',
          COMMENT6: 'The beneficiary is allowed to exchange his Ticket Kadéos® Online voucher with a Ticket Kadéos® Infini.paper gift voucher.'
        },
        RIGHT_SIDE: {
          ONLINE_SHOP: 'Ticket Kadéos® Online voucher give access to thousands of items on 36 online shops covering various industries',
          GIFT_VOUCHER: 'They are also redeemable for Ticket Kadeos Infini® paper gift vouchers',
          TERM_CONDITION: {
            TITLE: 'Terms and conditions:',
            COMMENT1: 'Offer cannot be combined with other commercial operations',
            COMMENT2: 'Valid for 12 months from the date on which the beneficiary has been emailed',
            COMMENT3: 'The Sponsored Person must not be an employee from the same company (or any subsidiary company belonging to the same group) as his Sponsor.',
            COMMENT4: 'A sponsor cannot sponsor himself',
            COMMENT: 'The email address from the Sponsored Person must be different from the email address of his Sponsor'
          },
          NOTE: 'Please note that we invite you today to add to your address book the email address of the shipper of your Kadéos gift voucher: <a href="mailto:c.lopez@upela.com">c.lopez@upela.com</a>. Also, do not forget to check your “Junk Mail” or “Spam” folders.'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(LoyaltyTranslate);
})();
