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
        COMMENT5: 'Careful : if the length is greater than <strong>119 cm</strong> (47 inches), you will not be able to use this service.',
        COMMENT6: 'If you encounter any problems, contact the ',
        COMMENT7: 'Upela Customer Service',
        COMMENT8: 'or send us your file ',
        COMMENT9: 'contact@upela.com',
        SEE_DEMON: 'SEE THE DEMONSTRATION',
        IMPORT: 'IMPORT',
        SPREADSHEET: {
          TITLE: 'YOUR SPREADSHEET',
          IMPORT: 'Import spreadsheet (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Les pays doivent être renseignés au format',
          COMMENT2: ' ISO 3166-1',
          COMMENT3: 'Cliquez ici ',
          COMMENT4: 'pour télécharger un exemple de tableau de contacts au format excel',
          COMMENT5: 'pour télécharger un exemple de tableau de contacts au format csv ou txt',
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
          COLLECTION: '&nbsp;Collection chosen (subject to the carrier availability)',
          DATE: 'Date',
          BETWEEN: '&nbsp;&nbsp;Between&nbsp;',
          DROP_OFF: 'I drop off my parcel at'
        }
      }
    });

    $translateProvider.translations('fr', {
      MASS_MAIL_UPLOAD: {
        TITLE: 'Envoi par import de fichier Excel ou txt',
        COMMENT1: 'Programmez l’envoi de plusieurs colis pour plusieurs destinataires.',
        COMMENT2: 'Importez votre ficher rempli selon les exemples  ci-dessous.',
        COMMENT3: 'Seul le poids est demandé, vous devez tenir compte du poids dimensionnel de votre colis, calculé comme suit: [longueur(cm) x hauteur(cm) x largeur(cm)] / 5000.',
        COMMENT4: 'Renseignez la valeur la plus élevée de ce résultat ou du poids réel.',
        COMMENT5: 'Attention : si la longueur de votre colis est supérieure à <strong>119 cm</strong>, vous ne pourrez pas utiliser ce service.',
        COMMENT6: 'En cas de problèmes, veuillez contacter le ',
        COMMENT7: 'Service Client d\'Upela',
        COMMENT8: ' ou nous envoyer votre fichier ',
        COMMENT9: 'contact@upela.com',
        SEE_DEMON: 'Voir la démonstration',
        IMPORT: 'IMPORTER',
        SPREADSHEET: {
          TITLE: 'VOTRE FICHIER',
          IMPORT: 'Import fichier (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Les pays doivent être renseignés au format',
          COMMENT2: ' ISO 3166-1',
          COMMENT3: 'Cliquez ici ',
          COMMENT4: 'pour télécharger un exemple de tableau de contacts au format excel',
          COMMENT5: 'pour télécharger un exemple de tableau de contacts au format csv ou txt',
          SENDER: 'Expéditeur : ',
          CHANGE_SENDER: 'Changer l\'expéditeur'
        },
        CARRIER: {
          TITLE: 'TRANSPORTEUR',
          PRIORITY: 'Priorité',
          CARRIER: 'Transporteur'
        },
        COLLECTION : {
          TITLE: 'DATE ET HEURE D\'ENLEVEMENT',
          COLLECTION: '&nbsp;Enlèvement souhaité (sous réserve des disponibilités du transporteur)',
          DATE: 'Date',
          BETWEEN: '&nbsp;&nbsp;Entre&nbsp;',
          DROP_OFF: 'Je dépose mes colis en agence'
        }
      }
    });

    $translateProvider.translations('es', {
      MASS_MAIL_UPLOAD: {
        TITLE: 'Envío por importación de archivo Excel o texto',
        COMMENT1: 'Programe el envío de varios paquetes para varios destinatarios.',
        COMMENT2: 'Importe su archivo relleno según los siguientes ejemplos.',
        COMMENT3: 'Solo se solicita el peso, debe tener en cuenta el peso dimensional del paquete, que se calcula de la siguiente manera: [longitud(cm) x altura(cm) x anchura(cm)] / 5000 .',
        COMMENT4: 'Indique el mayor valor entre este resultado y el peso real.',
        COMMENT5: 'Atención: Si la longitud de su paquete excede <strong>119 cm</strong>, no podrá utilizar este servicio.',
        COMMENT6: 'Si se produce cualquier problema, póngase en contacto con el ',
        COMMENT7: 'servicio de atención al cliente de Upela',
        COMMENT8: ' o háganos llegar su archivo a ',
        COMMENT9: 'contact@upela.com',
        SEE_DEMON: 'Ver la demostración',
        IMPORT: 'IMPORTAR',
        SPREADSHEET: {
          TITLE: 'SU ARCHIVO',
          IMPORT: 'Importar archivo (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Los países deben ser introducido según el formato ',
          COMMENT2: ' ISO 3166-1',
          COMMENT3: 'Haga clic aquí ',
          COMMENT4: 'para descargar un ejemplo de tabla de contactos en formato excel',
          COMMENT5: 'para descargar un ejemplo de tabla de contactos en formato csv o txt',
          SENDER: 'Remitente : ',
          CHANGE_SENDER: 'Cambiar el remitente'
        },
        CARRIER: {
          TITLE: 'TRANSPORTISTA',
          PRIORITY: 'Prioridad',
          CARRIER: 'Transportista'
        },
        COLLECTION : {
          TITLE: 'FECHA Y HORA DE LA RECOGIDA',
          COLLECTION: '&nbsp;Recogida seleccionada (según disponibilidad del transportista)',
          DATE: 'El:',
          BETWEEN: '&nbsp;&nbsp;entre&nbsp;',
          DROP_OFF: 'Deposito mis paquetes en la agencia'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(OrderProgressTranslate);
})();
