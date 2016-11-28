/**
 * Created by bear on 11/11/16.
 */
(function () {

  'use strict';

  function OrderPaymentTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      ORDER_PAYMENT: {
        TITLE: 'Step 4 : Confirmation and payment',
        SENDER: 'SENDER',
        RECIPIENT: 'RECIPIENT',
        BUSINESS: 'Business address',
        OK: 'Yes',
        NO: 'No',
        DROP_OFF: 'Dropoff on ',
        DELIVERY: 'Delivery on ',
        EDIT: ' Edit',
        PAYMENT: {
          TITLE: 'SECURE ON LINE PAYMENT',
          COMMENT: 'Choose your payment method. <br>You will be transferred to our secure payment server',
          SEVERAL: 'Several parcels to send?',
          CREDIT: '<a style="text-decoration: underline;" href="https://www.upela.com/en/credit-account/" target="_blank">Credit your account</a> and receive extra discounts'
        }
      }
    });

    $translateProvider.translations('fr', {
      ORDER_PAYMENT: {
        TITLE: 'Step 4 : Confirmation et paiement',
        SENDER: 'EXPÉDITEUR',
        RECIPIENT: 'DESTINATAIRE',
        BUSINESS: 'Adresse commerciale',
        OK: 'Yes',
        NO: 'No',
        DROP_OFF: 'Dépôt le ',
        DELIVERY: 'Livraison le ',
        EDIT: ' Editer',
        PAYMENT: {
          TITLE: 'PAIEMENT EN LIGNE SECURISÉ',
          COMMENT: 'Choississez votre mode de paiement. <br>Vous serez redirigé vers notre plateforme sécurisée.',
          SEVERAL: 'Plusieurs envois à faire ?',
          CREDIT: '<a style="text-decoration: underline;" href="https://www.upela.com/en/credit-account/" target="_blank">Créditez votre compte</a> et bénéficiez de remises supplémentaires'
        }
      }
    });

    $translateProvider.translations('es', {
      ORDER_PAYMENT: {
        TITLE: 'Step 4 : Confirmación y pago',
        SENDER: 'REMITENTE',
        RECIPIENT: 'DESTINATARIO',
        BUSINESS: 'Dirección de la empresa',
        OK: 'Yes',
        NO: 'No',
        DROP_OFF: 'Depósito el ',
        DELIVERY: 'Entrega el ',
        EDIT: ' Modificar',
        PAYMENT: {
          TITLE: 'PAGO EN LÍNEA SEGURO',
          COMMENT: 'Elija su modo de pago. <br>Se le redirigirá hacia nuestra plataforma de pago seguro.',
          SEVERAL: 'Several parcels to send?',
          CREDIT: '<a style="text-decoration: underline;" href="https://www.upela.com/en/credit-account/" target="_blank">Ingrese dinero en su cuenta</a> y disfrute de descuentos adicionales.'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(OrderPaymentTranslate);
})();
