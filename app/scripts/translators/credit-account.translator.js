/**
 * Created by bear on 11/15/16.
 */
(function () {

  'use strict';

  function CreditAccountTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      CREDIT_ACCOUNT: {
        TITLE: 'Credit your account',
        COMMENT: 'Credit your account and get free extra credits!',
        CHOOSE_AMOUNT: 'CHOOSE THE AMOUNT TO CREDIT',
        AMOUNT: 'Amount (€)',
        ADDITIONAL_TWO: 'For <strong>100€</strong> purchased, get <strong>2% free</strong> additional credits!',
        ADDITIONAL_THREE: 'For <strong>300€</strong> purchased, get <strong>3% free</strong> additional credits!',
        CONTINUE: 'Continue'
      }
    });

    $translateProvider.translations('fr', {
      CREDIT_ACCOUNT: {
        TITLE: 'Créditez votre compte',
        COMMENT: 'Créditez votre compte et bénéficiez de crédits supplémentaires offerts !',
        CHOOSE_AMOUNT: 'CHOISISSEZ LE MONTANT A CREDITER',
        AMOUNT: 'Montant (€)',
        ADDITIONAL_TWO: 'Pour <strong>100€</strong> achetés, <strong>2%</strong> de crédits supplémentaires <strong>offerts</strong> !',
        ADDITIONAL_THREE: 'Pour <strong>300€</strong> achetés, <strong>3%</strong> de crédits supplémentaires <strong>offerts</strong> !',
        CONTINUE: 'Continuer'
      }
    });

    $translateProvider.translations('es', {
      CREDIT_ACCOUNT: {
        TITLE: 'Ingrese dinero en su cuenta',
        COMMENT: '¡Ingrese dinero en su cuenta y disfrute de los descuentos adicionales que le ofrecemos!',
        CHOOSE_AMOUNT: 'ELIJA EL IMPORTE QUE DESEA INGRESAR',
        AMOUNT: 'Importe (€)',
        ADDITIONAL_TWO: 'Por <strong>100€</strong> comprados, <strong>2 %</strong> de créditos adicionales ¡<strong>gratis</strong>!',
        ADDITIONAL_THREE: 'Por <strong>300€</strong> comprados, <strong>3 %</strong> de créditos adicionales ¡<strong>gratis</strong>!',
        CONTINUE: 'Continuar'
      }
    });
  }

  angular.module('UpelaApp')
    .config(CreditAccountTranslate);
})();
