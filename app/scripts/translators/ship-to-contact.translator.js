/**
 * Created by bear on 11/14/16.
 */
(function () {

  'use strict';

  function ShipToContactTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      SHIP_TO_CONTACT: {
        TITLE: 'Send from address book',
        SEE_DEMON: 'SEE THE DEMONSTRATION',
        COMMENT: 'Sending to one of your contacts in one click!',
        DISPLAY: 'display/hide',
        SEL_RECIPIENT: {
          TITLE: 'SELECT A RECIPIENT',
          SEL_CONTACT: 'Select or enter the name of a contact',
          ADDRESS_BOOK: 'or open your address book'
        },
        SHIPMENT: {
          TITLE: 'ABOUT YOUR SHIPMENT',
          REASON: 'Reason',
          CONTENT: 'Content',
          SEL_LIST: '-- Select in the list --',
          PROHIBITED: 'Prohibited Goods'
        },
        INSURANCE: {
          TITLE: 'VALUE & OPTIONAL ADDITIONAL INSURANCE',
          DECLARED_VALUE: 'Declared value',
          SHIPMENT_VALUE: 'Value of your shipment',
          WARRANTY: {
            TEXT1: "Warranty limited to carrier's ",
            TEXT2: 'contractual insurance',
            TEXT3: ' of € 22/kilo'
          },
          REAL_VALUE: 'I want to insure my parcel at its real value (0.6%, minimum 4.5€)',
          CONDITIONS: 'see the conditions of insurance'
        },
        PARCELS: {
          TITLE: 'DESCRIPTION OF THE PARCELS',
          TYPE: {
            TITLE: 'Type',
            ENVELOPE: '&nbsp;Envelope&nbsp;',
            PARCEL: '&nbsp;Parcel&nbsp;',
            PALLET: '&nbsp;Pallet&nbsp;'
          },
          PARCELS: {
            TITLE: 'Parcels',
            NO: 'No.',
            UNIT: 'Wt/Unit',
            DIMENSIONS: 'Dimensions',
            LENGTH: 'Length',
            WIDTH: 'Width',
            HEIGHT: 'Height',
            ADD_PARCEL: 'Add a parcel',
            CHANGE_UNIT: 'Change unit of measure'
          }
        },
        COLLECTION: {
          TITLE: 'COLLECTION DATE',
          COLLECTION: 'Collection chosen (subject to the carrier availability)',
          DATE: 'Date',
          BETWEEN: '&nbsp;&nbsp;Between&nbsp;',
          DROP_OFF: 'I drop off my parcel at',
          OFFER: 'COMPARE THE OFFERS!'
        }
      }
    });

    $translateProvider.translations('fr', {
      SHIP_TO_CONTACT: {
        TITLE: 'Envoi du carnet d\'adresses',
        SEE_DEMON: 'Voir la démonstration',
        COMMENT: 'Envoi à l’un de vos contact en un clic !',
        DISPLAY: 'afficher / masquer',
        SEL_RECIPIENT: {
          TITLE: 'SELECTIONNEZ UN DESTINATAIRE',
          SEL_CONTACT: 'Selectionnez ou entrer le nom d\'un de vos contacts',
          ADDRESS_BOOK: 'ou ouvrez votre carnet d\'adresse'
        },
        SHIPMENT: {
          TITLE: 'CARACTERISTIQUES DE VOTRE ENVOI',
          REASON: 'Raison',
          CONTENT: 'Contenu',
          SEL_LIST: '-- Choisissez dans la liste --',
          PROHIBITED: 'Marchandises interdites'
        },
        INSURANCE: {
          TITLE: 'VALEUR & ASSURANCE COMPLEMENTAIRE FACULTATIVE',
          DECLARED_VALUE: 'Valeur déclarée',
          SHIPMENT_VALUE: 'Valeur de votre envoi',
          WARRANTY: {
            TEXT1: "Garantie limitée à l'",
            TEXT2: 'assurance contractuelle',
            TEXT3: ' du transporteur 22€/kg'
          },
          REAL_VALUE: 'J’assure mon colis à sa valeur réelle (0.6%, minimum 4.5€)',
          CONDITIONS: "svoir les conditions d'assurance"
        },
        PARCELS: {
          TITLE: 'DESCRIPTION DES COLIS',
          TYPE: {
            TITLE: 'Type',
            ENVELOPE: 'Pli',
            PARCEL: 'Colis',
            PALLET: 'Palette'
          },
          PARCELS: {
            TITLE: 'Colis',
            NO: 'Nb.',
            UNIT: 'Pds/Unit',
            DIMENSIONS: 'Dimensions',
            LENGTH: 'Long',
            WIDTH: 'Larg',
            HEIGHT: 'Haut',
            ADD_PARCEL: 'Ajouter un colis',
            CHANGE_UNIT: 'Changer unité'
          }
        },
        COLLECTION: {
          TITLE: 'DATE ET HEURE D\'ENLEVEMENT',
          COLLECTION: 'Enlèvement souhaité (sous réserve des disponibilités du transporteur)',
          DATE: 'Date',
          BETWEEN: 'Entre',
          DROP_OFF: 'Je dépose mes colis en agence',
          OFFER: 'COMPAREZ LES OFFRES !'
        }
      }
    });

    $translateProvider.translations('es', {
      SHIP_TO_CONTACT: {
        TITLE: 'Envío de la agenda',
        SEE_DEMON: 'Ver la demostración',
        COMMENT: '¡Enviando a uno de sus contactos en un clic!',
        DISPLAY: 'mostrar / ocultar',
        SEL_RECIPIENT: {
          TITLE: 'SELECCIONE UN DESTINATARIO',
          SEL_CONTACT: 'Seleccione o escriba el nombre de uno de sus contactos',
          ADDRESS_BOOK: 'o abra su agenda'
        },
        SHIPMENT: {
          TITLE: 'CARACTERÍSTICAS DE SU ENVÍO',
          REASON: 'Motivo',
          CONTENT: 'Contenido',
          SEL_LIST: '-- Seleccionar de la lista --',
          PROHIBITED: 'Mercancías prohibidas'
        },
        INSURANCE: {
          TITLE: 'VALOR Y SEGURO COMPLEMENTARIO OPCIONAL',
          DECLARED_VALUE: 'Valor declarado',
          SHIPMENT_VALUE: 'Valor de su envío',
          WARRANTY: {
            TEXT1: "Garantía limitada al ",
            TEXT2: 'seguro contractual',
            TEXT3: 'del transportista 22€/kg'
          },
          REAL_VALUE: 'Aseguro mi paquete con su valor real (0.6 %, mínimo 4,5€)',
          CONDITIONS: 'ver las condiciones del seguro'
        },
        PARCELS: {
          TITLE: 'DESCRIPCIÓN DE LOS PAQUETES',
          TYPE: {
            TITLE: 'Tipo',
            ENVELOPE: 'Sobre',
            PARCEL: 'Paquete',
            PALLET: 'Palet'
          },
          PARCELS: {
            TITLE: 'Paquete',
            NO: 'N.°',
            UNIT: 'Peso /u',
            DIMENSIONS: 'Dimensiones',
            LENGTH: 'Long.',
            WIDTH: 'Anch.',
            HEIGHT: 'Alt.',
            ADD_PARCEL: 'Añadir un paquete',
            CHANGE_UNIT: 'Cambiar unidad'
          }
        },
        COLLECTION: {
          TITLE: 'FECHA Y HORA DE LA RECOGIDA',
          COLLECTION: 'Recogida seleccionada (según disponibilidad del transportista)',
          DATE: 'El',
          BETWEEN: 'Entre',
          DROP_OFF: 'Deposito mis paquetes en la agencia',
          OFFER: '¡COMPARE LAS OFERTAS!'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(ShipToContactTranslate);
})();
