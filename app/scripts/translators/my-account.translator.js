/**
 * Created by bear on 11/11/16.
 */
(function () {

  'use strict';

  function MyAccountTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      MY_ACCOUNT: {
        TITLE: 'My account',
        BEGIN_SHIP: 'Begin a shipment',
        ORIGIN: {
          TITLE: 'Origin',
          TOWN: 'Postcode, Town',
          ADDRESS: 'Business'
        },
        DESTINATION: {
          TITLE: 'Destination',
          TOWN: 'Postcode, Town',
          ADDRESS: 'Business'
        },
        SHIPMENT: {
          TITLE: 'Your shipment',
          NO: 'No.',
          UNIT: 'Wt/Unit',
          LENGTH: 'Length',
          WIDTH: 'Width',
          HEIGHT: 'Height',
          ADD_PARCEL: 'Add a parcel',
          CHANGE_UNIT: 'Change unit of measure'
        },
        DATE: {
          TITLE: 'Date',
          COLLECTION_DATE: 'Collection date requested'
        },
        COMPARE_OFFER: 'COMPARE THE OFFERS!',
        MY_SHIPMENTS: {
          TITLE: 'My shipments',
          HISTORY: 'Your Upela shipment history',
          SEARCH: 'Search by shipment code or tracking number',
          DOWNLOAD: 'Download your shipments',
          TABLE: {
            DATE: 'Date',
            SENDER: 'Sender',
            CARRIER: 'Carrier',
            LABEL: 'Label',
            PRICE: 'Price',
            INVOICE: 'Invoice',
            STATUS: 'Status'
          }
        },
        MY_INVOICES: {
          TITLE: 'My invoices',
          CREATED_FROM: 'Created From',
          CREATED_TO: 'To',
          DUE_FROM: 'Due date From',
          DUE_TO: 'To',
          AMOUNT_FROM: 'Amount From',
          AMOUNT_TO: 'To',
          SEARCH: 'Search',
          DOWNLOAD: 'Download your invoices',
          TABLE: {
            INVOICE: {
              TITLE: 'INVOICE',
              DATE: 'Date',
              NUMBER: 'Number',
              AMOUNT: 'Amount incl.',
              DUE_DATE: 'Due date'
            },
            PAYMENT: {
              TITLE: 'PAYMENT',
              DATE: 'Date',
              METHOD: 'Method'
            }
          }
        },
        MY_PAYMENTS: {
          TITLE: 'My payments',
          HISTORY: 'Your Upela invoice history',
          DATE_FROM: 'Date From',
          DATE_TO: 'To',
          AMOUNT_FROM: 'Amount From',
          AMOUNT_TO: 'To',
          SEARCH: 'Search',
          NO_RESULT: 'No result found.'
        }
      }
    });

    $translateProvider.translations('fr', {
      MY_ACCOUNT: {
        TITLE: 'Mon compte',
        BEGIN_SHIP: 'Commencez un envoi',
        ORIGIN: {
          TITLE: 'Départ',
          TOWN: 'Code postal, Ville',
          ADDRESS: 'Entreprise'
        },
        DESTINATION: {
          TITLE: 'Destination',
          TOWN: 'Code postal, Ville',
          ADDRESS: 'Entreprise'
        },
        SHIPMENT: {
          TITLE: 'Votre expédition',
          NO: 'Nb.',
          UNIT: 'Pds/Unit',
          LENGTH: 'Long',
          WIDTH: 'Larg',
          HEIGHT: 'Haut',
          ADD_PARCEL: 'Ajouter un colis',
          CHANGE_UNIT: 'Changer unité'
        },
        DATE: {
          TITLE: 'Date',
          COLLECTION_DATE: 'Date d\'enlèvement souhaitée'
        },
        COMPARE_OFFER: 'COMPAREZ LES OFFRES !',
        MY_SHIPMENTS: {
          TITLE: 'Mes envois',
          HISTORY: 'Historique de vos envois sur Upela',
          SEARCH: 'Recherche avec le code d\'expédition ou le numéro de suivi',
          DOWNLOAD: 'Télécharger vos envois',
          TABLE: {
            DATE: 'Date',
            SENDER: 'Expéditeur',
            CARRIER: 'Transporteur',
            LABEL: 'Etiquette',
            PRICE: 'Prix',
            INVOICE: 'Facture',
            STATUS: 'Statut'
          }
        },
        MY_INVOICES: {
          TITLE: 'Mes factures',
          CREATED_FROM: 'Créé De',
          CREATED_TO: 'A',
          DUE_FROM: "Date d'échéance De",
          DUE_TO: 'A',
          AMOUNT_FROM: 'Montant De',
          AMOUNT_TO: 'A',
          SEARCH: ' Recherche',
          DOWNLOAD: 'Télécharger vos factures',
          TABLE: {
            INVOICE: {
              TITLE: 'FACTURE',
              DATE: 'Date',
              NUMBER: 'Numéro ',
              AMOUNT: 'Montant TTC.',
              DUE_DATE: 'Date d\'échéance'
            },
            PAYMENT: {
              TITLE: 'PAIEMENT',
              DATE: 'Date',
              METHOD: 'Mode'
            }
          }
        },
        MY_PAYMENTS: {
          TITLE: 'Mes règlements',
          HISTORY: 'Historique de vos factures sur Upela',
          DATE_FROM: 'Créé De',
          DATE_TO: 'A',
          AMOUNT_FROM: 'Montant De',
          AMOUNT_TO: 'A',
          SEARCH: 'Recherche',
          NO_RESULT: 'Aucun résultat.'
        }
      }
    });

    $translateProvider.translations('es', {
      MY_ACCOUNT: {
        TITLE: 'Mi cuenta',
        BEGIN_SHIP: 'Comience el proceso de envío',
        ORIGIN: {
          TITLE: 'Salida',
          TOWN: 'Código postal, Ciudad',
          ADDRESS: 'Empresa'
        },
        DESTINATION: {
          TITLE: 'Destino',
          TOWN: 'Código postal, Ciudad',
          ADDRESS: 'Empresa'
        },
        SHIPMENT: {
          TITLE: 'Su envío',
          NO: 'N.º',
          UNIT: 'Peso /u',
          LENGTH: 'Long',
          WIDTH: 'Anch',
          HEIGHT: 'Alt',
          ADD_PARCEL: 'Añadir un paquete',
          CHANGE_UNIT: 'Cambiar unidad'
        },
        DATE: {
          TITLE: 'El:',
          COLLECTION_DATE: 'Fecha de recogida deseada'
        },
        COMPARE_OFFER: '¡COMPARE LAS OFERTAS!',
        MY_SHIPMENTS: {
          TITLE: 'Mis envíos',
          HISTORY: 'Historial de sus envíos con Upela',
          SEARCH: 'Buscar por código de envío o número de seguimiento',
          DOWNLOAD: 'Descargar su envíos',
          TABLE: {
            DATE: 'El:',
            SENDER: 'REMITENTE',
            CARRIER: 'TRANSPORTISTA',
            LABEL: 'Etiqueta',
            PRICE: 'Precios',
            INVOICE: 'Factura',
            STATUS: 'Estado'
          }
        },
        MY_INVOICES: {
          TITLE: 'Mis facturas',
          CREATED_FROM: 'Creada De',
          CREATED_TO: 'Hacia',
          DUE_FROM: 'Fecha de vencimiento De',
          DUE_TO: 'Hacia',
          AMOUNT_FROM: 'Importe De',
          AMOUNT_TO: 'Hacia',
          SEARCH: 'Búsqueda',
          DOWNLOAD: 'Descargar sus facturas',
          TABLE: {
            INVOICE: {
              TITLE: 'Factura',
              DATE: 'El:',
              NUMBER: 'Número',
              AMOUNT: 'Total IVA incluido',
              DUE_DATE: 'Fecha de vencimiento'
            },
            PAYMENT: {
              TITLE: 'Pago',
              DATE: 'El:',
              METHOD: 'Modo'
            }
          }
        },
        MY_PAYMENTS: {
          TITLE: 'Mis pagos',
          HISTORY: 'Historial de sus facturas con Upela',
          DATE_FROM: 'El: De',
          DATE_TO: 'Hacia',
          AMOUNT_FROM: 'Importe De',
          AMOUNT_TO: 'Hacia',
          SEARCH: 'Búsqueda',
          NO_RESULT: 'No se ha encontrado ningún resultado.'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(MyAccountTranslate);
})();
