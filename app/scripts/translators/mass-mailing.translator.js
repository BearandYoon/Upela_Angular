/**
 * Created by bear on 11/13/16.
 */
(function () {

  'use strict';

  function MassMailTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      MASS_MAIL: {
        TITLE: 'Mass mailing',
        COMMENT1: 'Group your items by selecting multiple contacts from your address book.<br>This option allows you to send the same parcel (weight and size) to multiple recipients.',
        COMMENT2: '<strong>Important:</strong> By clicking on CONTINUE, I confirm that I have read the terms and conditions of the Upela.com website and the terms and conditions of the selected carrier, and unreservedly accept them.',
        CONTINUE: 'CONTINUE',
        SEE_DEMON: 'SEE THE DEMONSTRATION',
        YOUR_CONTACTS: 'YOUR CONTACTS',
        SEL_CONTACT: 'Select or enter the name of a contact',
        ADDRESS_BOOK: 'or open your address book',
        SENDER: 'Sender : ',
        CHANGE_SENDER: 'Change sender',
        DISPLAY: 'display/hide',
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
        SHIPPING_METHOD: {
          TITLE: 'SHIPPING METHOD',
          PRIORITY: 'Priority',
          CARRIER: 'Carrier'
        },
        SHIPMENT: {
          TITLE: 'ABOUT YOUR SHIPMENT',
          CONTENT: 'Content',
          GOODS: 'Prohibited Goods',
          ORIGIN: 'Origin of the goods'
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
        COLLECTION: {
          TITLE: 'COLLECTION DATE',
          COLLECTION: 'Collection chosen (subject to the carrier availability)',
          DATE: 'Date',
          BETWEEN: '&nbsp;&nbsp;Between&nbsp;',
          DROP_OFF: 'I drop off my parcel at',
          NEAREST: 'See the nearest collection points'
        },
        INFORMATION: {
          TITLE: 'INFORMATION & CUSTOMS OBLIGATIONS',
          TRANSPORT_LABEL: 'Before confirming your order, check that the sender is able to print out the transport label.',
          DAMAGE: 'Your package should be properly wrapped and protected: inadequate packaging will preclude damage claims.'
        }
      }
    });

    $translateProvider.translations('fr', {
      MASS_MAIL: {
        TITLE: 'Envoi en masse',
        COMMENT1: 'Groupez vos envois en sélectionnant plusieurs contacts de votre carnet d\'adresses.<br>Cette option vous permet d\'envoyer le même colis (poids et dimensions) à plusieurs destinataires.',
        COMMENT2: '<strong>Important:</strong> En cliquant sur CONTINUER, je déclare avoir pris connaissance des Conditions Générales de Vente du site Upela.com ainsi que et les Conditions Générales de Vente du transporteur selectionné, et les accepter sans réserve.',
        CONTINUE: 'Continuer',
        SEE_DEMON: 'Voir la démonstration',
        YOUR_CONTACTS: 'VOS CONTACTS',
        SEL_CONTACT: 'Selectionnez ou entrer le nom d\'un de vos contacts',
        ADDRESS_BOOK: 'ou ouvrez votre carnet d\'adresse',
        SENDER: 'Expéditeur : ',
        CHANGE_SENDER: 'Changer l\'expéditeur',
        DISPLAY: 'afficher / masquer',
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
        SHIPPING_METHOD: {
          TITLE: 'MODE D\'ENVOI',
          PRIORITY: 'Priorité',
          CARRIER: 'Transporteur'
        },
        SHIPMENT: {
          TITLE: 'CARACTERISTIQUES DE VOTRE ENVOI',
          CONTENT: 'Contenu',
          GOODS: 'Marchandises interdites',
          ORIGIN: 'Origine marchandise'
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
        COLLECTION: {
          TITLE: 'DATE ET HEURE D\'ENLEVEMENT',
          COLLECTION: 'Enlèvement souhaité (sous réserve des disponibilités du transporteur)',
          DATE: 'Date',
          BETWEEN: 'Entre',
          DROP_OFF: 'Je dépose mes colis en agence',
          NEAREST: 'Voir les points de dépôt à proximité'
        },
        INFORMATION: {
          TITLE: 'INFORMATIONS & OBLIGATIONS DOUANIERES',
          TRANSPORT_LABEL: "Avant de confirmer votre commande, vérifiez que l'expéditeur pourra imprimer le bordereau de transport.",
          DAMAGE: "Votre envoi doit être correctement emballé et protégé, un défaut d'emballage vous privera de tout recours en cas de détérioration."
        }
      }
    });

    $translateProvider.translations('es', {
      MASS_MAIL: {
        TITLE: 'Envío masivo',
        COMMENT1: 'Agrupe sus envíos seleccionando varios contactos de su agenda.<br>Esta opción le permite enviar el mismo paquete (peso y dimensiones) a varios destinatarios.',
        COMMENT2: '<strong>Importante:</strong> Al hacer clic en CONTINUAR, declaro estar informado de las Condiciones generales de venta del sitio Upela.com, así como de las Condiciones generales de venta del transportista seleccionado y las acepto sin reservas.',
        CONTINUE: 'CONTINUAR',
        SEE_DEMON: 'Ver la demostración',
        YOUR_CONTACTS: 'SUS CONTACTOS',
        SEL_CONTACT: 'Seleccione o escriba el nombre de uno de sus contactos',
        ADDRESS_BOOK: 'o abra su agenda',
        SENDER: 'Remitente : ',
        CHANGE_SENDER: 'Cambiar el remitente',
        DISPLAY: 'mostrar / ocultar',
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
        SHIPPING_METHOD: {
          TITLE: 'MODO DE ENVÍO',
          PRIORITY: 'Prioridad',
          CARRIER: 'Transportista'
        },
        SHIPMENT: {
          TITLE: 'CARACTERÍSTICAS DE SU ENVÍO',
          CONTENT: 'Contenido',
          GOODS: 'Mercancías prohibidas',
          ORIGIN: 'Origen mercancía'
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
        COLLECTION: {
          TITLE: 'FECHA Y HORA DE LA RECOGIDA',
          COLLECTION: 'Recogida seleccionada (según disponibilidad del transportista)',
          DATE: 'El',
          BETWEEN: 'Entre',
          DROP_OFF: 'Deposito mis paquetes en la agencia',
          NEAREST: 'See the nearest collection points'
        },
        INFORMATION: {
          TITLE: 'INFORMACIÓN Y OBLIGACIONES ADUANERAS',
          TRANSPORT_LABEL: 'Antes de confirmar su pedido, compruebe que el remitente pueda imprimir el albarán de transporte.',
          DAMAGE: 'Su envío debe estar correctamente embalado y protegido, cualquier defecto en el embalaje le impedirá recurrir en caso de deterioro.'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(MassMailTranslate);
})();
