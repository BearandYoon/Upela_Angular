/**
 * Created by bear on 11/14/16.
 */
(function () {

  'use strict';

  function OrderProgressTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      MASS_MAIL_UPLOAD: {
        TITLE: 'Ship using Excel spreadsheet or text',
        COMMENT1: 'Schedule the shipment of multiple packages to multiple recipients.',
        COMMENT2: 'Import your completed file according to the examples below.',
        COMMENT3: 'Only the weight is required, you must take into account the dimensional weight of your parcel calculated as follows: [length (cm) x height (cm) x width (cm)] / 5000.',
        COMMENT4: 'Fill in the highest value between this result and the actual weight.',
        COMMENT5: 'Careful : if the length is greater than 119 cm (47 inches), you will not be able to use this service.',
        COMMENT6: 'If you encounter any problems, contact the Upela Customer Service or send us your file contact@upela.com',
        SEE_DEMON: 'SEE THE DEMONSTRATION',
        IMPORT: 'IMPORT',
        SPREADSHEET: {
          TITLE: 'YOUR SPREADSHEET',
          IMPORT: 'Import spreadsheet (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Les pays doivent être renseignés au format ISO 3166-1',
          COMMENT2: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format excel',
          COMMENT3: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format csv ou txt',
          SENDER: 'Sender : ',
          CHANGE_SENDER: 'Change sender'
        },
        CARRIER: {
          TITLE: 'CARRIER',
          PRIORITY: 'Priority',
          CARRIER: 'Carrier'
        },
        COLLECTION : {
          TITLE: 'COLLECTION DATE',
          COLLECTION: 'Collection chosen (subject to the carrier availability)',
          DATE: 'Date',
          BETWEEN: '&nbsp;&nbsp;Between&nbsp;',
          DROP_OFF: 'I drop off my parcel at'
        }
      }
    });

    $translateProvider.translations('fr', {
      MASS_MAIL_UPLOAD: {
        TITLE: 'Ship using Excel spreadsheet or text',
        COMMENT1: 'Schedule the shipment of multiple packages to multiple recipients.',
        COMMENT2: 'Import your completed file according to the examples below.',
        COMMENT3: 'Only the weight is required, you must take into account the dimensional weight of your parcel calculated as follows: [length (cm) x height (cm) x width (cm)] / 5000.',
        COMMENT4: 'Fill in the highest value between this result and the actual weight.',
        COMMENT5: 'Careful : if the length is greater than 119 cm (47 inches), you will not be able to use this service.',
        COMMENT6: 'If you encounter any problems, contact the Upela Customer Service or send us your file contact@upela.com',
        SEE_DEMON: 'SEE THE DEMONSTRATION',
        IMPORT: 'IMPORT',
        SPREADSHEET: {
          TITLE: 'YOUR SPREADSHEET',
          IMPORT: 'Import spreadsheet (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Les pays doivent être renseignés au format ISO 3166-1',
          COMMENT2: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format excel',
          COMMENT3: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format csv ou txt',
          SENDER: 'Sender : ',
          CHANGE_SENDER: 'Change sender'
        },
        CARRIER: {
          TITLE: 'CARRIER',
          PRIORITY: 'Priority',
          CARRIER: 'Carrier'
        },
        COLLECTION : {
          TITLE: 'COLLECTION DATE',
          COLLECTION: 'Collection chosen (subject to the carrier availability)',
          DATE: 'Date',
          BETWEEN: '&nbsp;&nbsp;Between&nbsp;',
          DROP_OFF: 'I drop off my parcel at'
        }
      }
    });

    $translateProvider.translations('es', {
      MASS_MAIL_UPLOAD: {
        TITLE: 'Ship using Excel spreadsheet or text',
        COMMENT1: 'Schedule the shipment of multiple packages to multiple recipients.',
        COMMENT2: 'Import your completed file according to the examples below.',
        COMMENT3: 'Only the weight is required, you must take into account the dimensional weight of your parcel calculated as follows: [length (cm) x height (cm) x width (cm)] / 5000.',
        COMMENT4: 'Fill in the highest value between this result and the actual weight.',
        COMMENT5: 'Careful : if the length is greater than 119 cm (47 inches), you will not be able to use this service.',
        COMMENT6: 'If you encounter any problems, contact the Upela Customer Service or send us your file contact@upela.com',
        SEE_DEMON: 'SEE THE DEMONSTRATION',
        IMPORT: 'IMPORT',
        SPREADSHEET: {
          TITLE: 'YOUR SPREADSHEET',
          IMPORT: 'Import spreadsheet (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Les pays doivent être renseignés au format ISO 3166-1',
          COMMENT2: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format excel',
          COMMENT3: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format csv ou txt',
          SENDER: 'Sender : ',
          CHANGE_SENDER: 'Change sender'
        },
        CARRIER: {
          TITLE: 'CARRIER',
          PRIORITY: 'Priority',
          CARRIER: 'Carrier'
        },
        COLLECTION : {
          TITLE: 'COLLECTION DATE',
          COLLECTION: 'Collection chosen (subject to the carrier availability)',
          DATE: 'Date',
          BETWEEN: '&nbsp;&nbsp;Between&nbsp;',
          DROP_OFF: 'I drop off my parcel at'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(OrderProgressTranslate);
})();
