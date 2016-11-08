/**
 * Created by bear on 11/8/16.
 */
(function () {

  'use strict';

  function AuthTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      LOGIN: {
        TITLE: 'Login to Upela',
        EMAIL: 'Email',
        PASSWORD: 'Password',
        REMEMBER: 'Remember me',
        FORGOT: 'Forgot password?',
        LOGIN: 'Login',
        NO_ACCOUNT: 'No account yet ?',
        FREE_ACCOUNT: 'Open your free account'
      },
      REGISTER: {
        TITLE: 'Parcel consignment account',
        ALREADY: 'Already registered?',
        OPEN: 'Open an account',
        CONFIRM: 'Confirm password',
        COMMENT: 'We need extra information about you as a company to validate a professional account.  You will be asked to enter your company registration number and EU VATIN number.  No other distinction is made by Upela.',
        ADVANTAGE: 'What are the advantages of a pro account?',
        PERSONAL: 'Personnal account',
        PROFESSIONAL: 'Professional account'
      }
    });

    $translateProvider.translations('fr', {
      LOGIN: {
        TITLE: 'Se connecter sur Upela',
        EMAIL: 'Email',
        PASSWORD: 'Mot de passe',
        REMEMBER: 'Se souvenir de moi',
        FORGOT: 'Mot de passe oublié ?',
        LOGIN: 'Se connecter',
        NO_ACCOUNT: 'Pas encore de compte ?',
        FREE_ACCOUNT: 'Créer un compte gratuitement'
      },
      REGISTER: {
        TITLE: 'Compte envoi de colis',
        ALREADY: 'Déjà enregistré(e) ?',
        OPEN: 'Créer un compte',
        CONFIRM: 'Confirmer mot de passe',
        COMMENT: 'En tant que société, des informations supplémentaires seront nécessaires pour valider un compte professionnel. Il vous sera demandé de renseigner votre code SIRET et N° TVA intra-communautaire.',
        ADVANTAGE: 'Quels sont les avantages d\'un compte pro ?',
        PERSONAL: 'Compte personnel',
        PROFESSIONAL: 'Compte professionnel'
      }
    });

    $translateProvider.translations('es', {
      LOGIN: {
        TITLE: 'Iniciar sesión en Upela',
        EMAIL: 'Correo electrónico',
        PASSWORD: 'Contraseña',
        REMEMBER: 'Recordarme',
        FORGOT: '¿Ha olvidado la contraseña?',
        LOGIN: 'Iniciar sesión',
        NO_ACCOUNT: '¿No tiene cuenta todavía?',
        FREE_ACCOUNT: 'Crear una cuenta de forma gratuita'
      },
      REGISTER: {
        TITLE: 'Cuenta envío del paquete',
        ALREADY: '¿Ya está registrado?',
        OPEN: 'Crear una cuenta',
        CONFIRM: 'Confirmar la contraseña',
        COMMENT: 'Como empresa, será necesario aportar información adicional para validar una cuenta profesional. Deberá indicar su número de identificación fiscal así como su N.º de IVA intracomunitario.',
        ADVANTAGE: '¿Cuáles son las ventajas de una cuenta profesional?',
        PERSONAL: 'Cuenta personal',
        PROFESSIONAL: 'Cuenta profesional'
      }
    });
  }

  angular.module('UpelaApp')
    .config(AuthTranslate);
})();
