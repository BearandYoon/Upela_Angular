/**
 * Created by bear on 11/16/16.
 */
(function () {

  'use strict';

  function MySettingsTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      MY_SETTINGS: {
        TITLE: 'Settings',
        INFORMATION: {
          TITLE: 'My information',
          ADDRESS: {
            TITLE: 'Address',
            RESIDENTIAL_ADDRESS: 'Residential address',
            BUSINESS_ADDRESS: 'Business address',
            COMPANY: 'Company',
            SIRET: 'SIRET',
            SIRET_COMMENT1: 'For a French professional account, you can enter either the company registration number field or the intra-community VAT field.',
            SIRET_COMMENT2: 'For a foreign-based account, please indicate a legal registration number in the place of SIRET',
            VAT: 'or VAT N°',
            NAME: 'Last name/First name',
            PHONE: 'Phone',
            ADDRESS: 'Address',
            COMMENTS: 'Commnets',
            COUNTRY: 'Country',
            POSTAL_CODE: 'Postal code',
            CITY: 'City',
            ANOTHER_ADDRESS: 'Use another address for invoice'
          },
          APPORTEUR: {
            TITLE: 'Apporteur Code',
            CODE: 'Apporteur Code',
            SAVE: 'Save',
            CANCEL: 'Cancel'
          }
        },
        DEBIT: {
          TITLE: 'Direct Debit',
          WHAT_SEPA: {
            TITLE: 'What is a SEPA Direct Debit?',
            COMMENT1: 'The SEPA Direct Debit is the new european standard for bank direct debits.',
            COMMENT2: 'It is progressively replacing the French bank direct debit with RIB and debit authorisation.'
          },
          HOW_SEPA: {
            TITLE: 'How does the SEPA direct debit work?',
            COMMENT1: 'Follow these steps :',
            COMMENT2: 'Enter your IBAN and BIC in the following form.',
            COMMENT3: "Download the document 'Mandate for SEPA Direct Debit'. Fill in the downloaded form. Don't forget to sign it.",
            COMMENT4: "Scan and upload the signed mandate by clicking on 'Scan'"
          },
          STAGE_ONE: {
            TITLE: 'Stage 1',
            COMMENT: 'Enter your IBAN and BIC in the following form',
            IBAN: 'IBAN',
            BIC: 'BIC'
          },
          STAGE_TWO: {
            TITLE: 'Stage 2',
            COMMENT1: 'Click on the link to manage a SEPA Direct Debit.',
            COMMENT2: "Fill it in and print it by clicking on 'Print this page'",
            COMMENT3: 'Sign your mandate'
          },
          STAGE_THREE: {
            TITLE: 'Stage 3',
            COMMENT1: "Scan and upload your signed mandate+Kbis+RIB by clicking on 'Scan'",
            COMMENT2: 'Or send us the documents by e-mail to ',
            SEPA: 'SEPA mandate + Kbis + RIB'
          },
          IMPORT: 'Import',
          CANCEL: 'Cancel'
        },
        OPTIONS: {
          TITLE: 'Options',
          AUTOMATE_TASK: {
            TITLE: 'Automate your repetitive tasks',
            COMMENT1: 'Select the default parameters of your account and your shipments.',
            COMMENT2: 'Do you send the same type of packages frequently?',
            COMMENT3: 'Increase efficiency whilst your orders are being processed: the shipment parameters selected will be displayed automatically for each of your consignments!',
            COMMENT4: 'However you will be able to change them individually during the ordering procedure.'
          },
          DEFAULT_VALUES: 'DEFAULT VALUES FOR YOUR SHIPMENTS',
          INFORMATION: {
            TITLE: 'SHIPMENT INFORMATION',
            TYPE: {
              TITLE: 'What type of packaging do you use most often?',
              ENVELOPE: '&nbsp;Envelope&nbsp;',
              PARCEL: '&nbsp;Parcel&nbsp;',
              PALLET: '&nbsp;Pallet&nbsp;'
            },
            SHIPMENT_SIZE: {
              TITLE: 'Do you regularly send the same shipment (number, weight and size of parcel(s))?',
              NO: 'No.',
              UNIT: 'Wt/Unit',
              DIMENSIONS: 'Dimensions',
              NAME: 'Name',
              LENGTH: 'Length',
              WIDTH: 'Width',
              HEIGHT: 'Height',
              CHANGE_UNIT: 'Change unit of measure'
            },
            PARCELS_SIZE: {
              TITLE: 'Set up the standard size of your parcels:',
              ADD_DIMENSION: 'Add a dimension'
            },
            PARCELS_REASON: 'What is the most common reason for sending parcels?',
            SHIPMENT_CONTENT: 'What is the content of your shipments?',
            LABEL_FORMAT: 'Label format'
          },
          TRANSPORT_OFFERS: {
            TITLE: 'SELECTION OF TRANSPORT OFFERS',
            LIKE_CARRIER: 'Which carrier(s) would you like to use?',
            COLLECTION_METHOD: 'Desired collection method?',
            DELIVERY_METHOD: 'Desired delivery method?'
          },
          INSURANCE: {
            TITLE: 'SHIPMENT VALUE AND OPTIONAL SUPPLEMENTARY INSURANCE',
            VALUE: 'What is the value of your shipments?',
            REAL_VALUE: 'Would you like to insure your shipments at their real value (cost : 0.6% of the value, minimum 4.5€)?',
            YES: 'Yes',
            NO: 'No'
          },
          PICKUP: {
            TITLE: 'PICKUP OF YOUR PARCELS',
            OPEN_HOURS: 'What are your opening hours?',
            COLLECTION: '&nbsp;Collection chosen (subject to the carrier availability)',
            BETWEEN: 'Between&nbsp;',
            AND: '&nbsp;and&nbsp;',
            DROP_OFF: 'I prefer to drop off my parcels'
          },
          ABROAD: {
            TITLE: 'SENDING ABROAD',
            ADD_DESCRIPTION: 'Add a description (in English) and/or the customs code of your good',
            ITEM: 'Enter the country of origin, quantity, and unit price of you item',
            COUNTRY: 'Country',
            QUANTITY: 'Quantity',
            PRICE: 'Unit price'
          },
          TAXES: {
            TITLE: 'TAXES AND CUSTOMS DUTIES ACCOUNT',
            UPS: 'Do you already have a UPS account (required for any import with UPS)?',
            ACCOUNT_NUMBER: 'Account number',
            POSTCODE: 'Postcode',
            COUNTRY: 'Country'
          },
          NOTIFICATION: {
            TITLE: 'EMAIL AND NOTIFICATIONS',
            RECEIVER: 'Notify your receiver by email of the expected delivery date',
            WAYBILL: 'Receive waybills and invoices by e-mail',
            DELIVERY: 'Receive delivery confirmations and evaluation requests by e-mail',
            NEWSLETTER: 'Receive newsletters and promotional offers'
          },
          SAVE: 'Save',
          CANCEL: 'Cancel'
        },
        EMAIL: {
          TITLE: 'Change email',
          COMMENT: 'Please enter new email and password',
          CURRENT: 'Current email',
          NEW: 'New email',
          CONFIRM: 'Confirm email',
          PASSWORD: 'Password',
          SAVE: 'Save',
          CANCEL: 'Cancel'
        },
        PASSWORD: {
          TITLE: 'Change password',
          COMMENT: 'Please enter your old and new password',
          OLD: 'Old password',
          NEW: 'New password',
          CONFIRM: 'Confirm password',
          SAVE: 'Save',
          CANCEL: 'Cancel'
        }
      }
    });

    $translateProvider.translations('fr', {
      MY_SETTINGS: {
        TITLE: 'Paramètres',
        INFORMATION: {
          TITLE: 'Mes informations',
          ADDRESS: {
            TITLE: 'Adresse',
            RESIDENTIAL_ADDRESS: 'Adresse Résidentielle',
            BUSINESS_ADDRESS: 'Adresse commerciale',
            COMPANY: 'Société',
            SIRET: 'siret',
            SIRET_COMMENT1: 'Pour un compte professionnel français, vous pouvez saisir soit le champ SIRET soit le champ TVA intra-communautaire.',
            SIRET_COMMENT2: 'Pour un compte basé à l\'étranger veuillez indiquer à la place du SIRET un numéro d\'enregistrement ou d\'inscription légal dans le pays',
            VAT: 'ou N° TVA',
            NAME: 'Nom / Prénom',
            PHONE: 'Téléphone',
            ADDRESS: 'Adresse',
            COMMENTS: 'Remarques',
            COUNTRY: 'Pays',
            POSTAL_CODE: 'Code postal',
            CITY: 'Ville',
            ANOTHER_ADDRESS: 'Utiliser une autre adresse pour la facturation'
          },
          APPORTEUR: {
            TITLE: 'Code Apporteur',
            CODE: 'Code Apporteur',
            SAVE: 'Enregistrer',
            CANCEL: 'Annuler'
          }
        },
        DEBIT: {
          TITLE: 'Prélèvement',
          WHAT_SEPA: {
            TITLE: 'Qu\'est-ce que le prélèvement SEPA ?',
            COMMENT1: 'Le prélèvement SEPA est le nouveau standard européen de prélèvement bancaire.',
            COMMENT2: 'Il remplace progressivement le prélèvement bancaire avec RIB et autorisation de prélèvement.'
          },
          HOW_SEPA: {
            TITLE: 'Comment fonctionne le prélèvement SEPA ?',
            COMMENT1: 'Suivez les étapes présentées ci-dessous :',
            COMMENT2: '1. Saisissez votre IBAN et BIC dans le formulaire ci-dessous.',
            COMMENT3: '2. Téléchargez le document appelé "mandat de prélèvement SEPA". Remplissez le document téléchargé. N\'oubliez pas de le signer.',
            COMMENT4: '3. Scannez et chargez votre mandat signé en cliquant sur "Parcourir".'
          },
          STAGE_ONE: {
            TITLE: 'Etape 1',
            COMMENT: 'Saisissez votre IBAN et BIC dans le formulaire ci-dessous.',
            IBAN: 'IBAN',
            BIC: 'BIC'
          },
          STAGE_TWO: {
            TITLE: 'Etape 2',
            COMMENT1: 'Cliquez sur ce lien pour générer un mandat de prélèvement SEPA.',
            COMMENT2: 'Remplissez et imprimez le en cliquant sur "Imprimer cette page".',
            COMMENT3: 'Signez votre mandat.'
          },
          STAGE_THREE: {
            TITLE: 'Etape 3',
            COMMENT1: 'Scannez et chargez votre mandat signé + Kbis + RIB en cliquant sur "Parcourir".',
            COMMENT2: 'Ou envoyez-nous les documents par email à',
            SEPA: 'Mandat SEPA + Kbis + RIB'
          },
          IMPORT: 'Importer',
          CANCEL: 'Annuler'
        },
        OPTIONS: {
          TITLE: 'Options',
          AUTOMATE_TASK: {
            TITLE: 'Automatisez vos tâches répétitives',
            COMMENT1: 'Choisissez les paramètres par défaut de votre compte et de vos expéditions.',
            COMMENT2: 'Vous envoyez fréquemment le même type de colis ?',
            COMMENT3: 'Gagnez en efficacité lors du passage de vos commandes: les paramètres d’expédition choisis s’afficheront par défaut pour chacun de vos envois !',
            COMMENT4: 'Toutefois, il vous sera possible de les modifier individuellement durant la procédure de commande.'
          },
          DEFAULT_VALUES: 'Valeurs par défaut pour vos expéditions',
          INFORMATION: {
            TITLE: 'Information sur vos envois',
            TYPE: {
              TITLE: 'Quel type de conditionnement utilisez-vous le plus ?',
              ENVELOPE: '&nbsp;Pli&nbsp;',
              PARCEL: '&nbsp;Colis&nbsp;',
              PALLET: '&nbsp;Palette&nbsp;'
            },
            SHIPMENT_SIZE: {
              TITLE: 'Envoyez-vous régulièrement le même envoi (quantité, poids, dimensions du colis) ?',
              NO: 'Nb.',
              UNIT: 'Pds/Unit',
              DIMENSIONS: 'Dimensions',
              NAME: 'Nom',
              LENGTH: 'Long',
              WIDTH: 'Larg',
              HEIGHT: 'Haut',
              CHANGE_UNIT: 'Changer unité'
            },
            PARCELS_SIZE: {
              TITLE: 'Configurez les dimensions standard de vos cartons:',
              ADD_DIMENSION: 'Ajouter une dimension'
            },
            PARCELS_REASON: 'Quelle est la raison la plus courante de vos expéditions ?',
            SHIPMENT_CONTENT: 'Quel est le contenu de vos envois ?',
            LABEL_FORMAT: 'Format étiquettes'
          },
          TRANSPORT_OFFERS: {
            TITLE: 'Sélection des offres de transport',
            LIKE_CARRIER: 'Quel(s) transporteur(s) souhaitez-vous utiliser ?',
            COLLECTION_METHOD: 'Type d’enlèvement souhaité ?',
            DELIVERY_METHOD: 'Type de livraison souhaité ?'
          },
          INSURANCE: {
            TITLE: 'Valeur et assurance complémentaire facultative',
            VALUE: 'Quel est la valeur de vos envois ?',
            REAL_VALUE: 'Souhaitez vous assurer vos envois à leur valeur réelle (coût: 0.6% de la valeur, minimum 4.5€) ?',
            YES: '&nbsp;Oui',
            NO: '&nbsp;Non'
          },
          PICKUP: {
            TITLE: 'Ramassage de vos envois',
            OPEN_HOURS: 'Quels sont vos horaires d’ouverture ?',
            COLLECTION: '&nbsp;Enlèvement souhaité (sous réserve des disponibilités du transporteur)',
            BETWEEN: 'Entre&nbsp;',
            AND: '&nbsp;et&nbsp;',
            DROP_OFF: 'Je préfère déposer mes envois en agence'
          },
          ABROAD: {
            TITLE: 'Envoi à l’étranger',
            ADD_DESCRIPTION: 'Ajoutez une description (en anglais) et/ou un code douanier pour votre marchandise',
            ITEM: 'Indiquez le pays d\'origine, la quantité d\'articles et le prix unitaire de votre marchandise',
            COUNTRY: 'Pays',
            QUANTITY: 'Quantité',
            PRICE: 'PRIX /u'
          },
          TAXES: {
            TITLE: 'Compte pour réglement des droits et taxes',
            UPS: 'Avez-vous un compte UPS (nécessaire pour les importations avec ce transporteur) ?',
            ACCOUNT_NUMBER: 'Numéro de compte',
            POSTCODE: 'Code postal',
            COUNTRY: 'Pays'
          },
          NOTIFICATION: {
            TITLE: 'Email et notifications',
            RECEIVER: 'Envoyer une notification de commande par email au destinataire, lui indiquant la date de livraison prévue de l\'envoi',
            WAYBILL: 'Recevoir les bordereaux et factures par email',
            DELIVERY: 'Recevoir les bordereaux et factures par email',
            NEWSLETTER: 'Recevoir les newsletters et offres promotionnelles'
          },
          SAVE: 'Enregistrer',
          CANCEL: 'Annuler'
        },
        EMAIL: {
          TITLE: 'Changer mon email',
          COMMENT: 'Veuillez saisir votre nouvel email et votre mot de passe',
          CURRENT: 'Email actuel',
          NEW: 'Nouvel email',
          CONFIRM: 'Confirmer email',
          PASSWORD: 'Mot de passe',
          SAVE: 'Enregistrer',
          CANCEL: 'Annuler'
        },
        PASSWORD: {
          TITLE: 'Changer mon mot de passe',
          COMMENT: 'Veuillez saisir votre ancien et votre nouveau mot de passe',
          OLD: 'Ancien mot de passe',
          NEW: 'Nouveau mot de passe',
          CONFIRM: 'Confirmer mot de passe',
          SAVE: 'Enregistrer',
          CANCEL: 'Annuler'
        }
      }
    });

    $translateProvider.translations('es', {
      MY_SETTINGS: {
        TITLE: 'Parámetros',
        INFORMATION: {
          TITLE: 'Mi información',
          ADDRESS: {
            TITLE: 'Dirección',
            RESIDENTIAL_ADDRESS: 'Dirección residencial',
            BUSINESS_ADDRESS: 'Dirección de la empresa',
            COMPANY: 'Empresa',
            SIRET: 'N.º Siret (NIF)',
            SIRET_COMMENT1: 'Para una cuenta profesional francesa, puede rellenar el campo SIRET o el campo IVA intracomunitario.',
            SIRET_COMMENT2: 'Para una cuenta con sede en el extranjero, en lugar del número SIRET, indique el número de identificación fiscal legal en el país.',
            VAT: 'o N.° IVA',
            NAME: 'Apellido/Nombre',
            PHONE: 'Teléfono',
            ADDRESS: 'Dirección',
            COMMENTS: 'Observaciones',
            COUNTRY: 'País',
            POSTAL_CODE: 'Código postal',
            CITY: 'Ciudad',
            ANOTHER_ADDRESS: 'Utilizar otra dirección para la factura'
          },
          APPORTEUR: {
            TITLE: 'Código de aportador',
            CODE: 'Código de aportador',
            SAVE: 'Registrar',
            CANCEL: 'Cancelar'
          }
        },
        DEBIT: {
          TITLE: 'Domiciliación',
          WHAT_SEPA: {
            TITLE: '¿Qué es la domiciliación SEPA?',
            COMMENT1: 'La domiciliación SEPA es el nuevo estándar europeo de domiciliación bancaria.',
            COMMENT2: 'Está reemplazando progresivamente la domiciliación bancaria con RIB y autorización de domiciliación.'
          },
          HOW_SEPA: {
            TITLE: '¿Cómo funciona la domiciliación SEPA?',
            COMMENT1: 'Siga los pasos que se indican a continuación:',
            COMMENT2: '1. Introduzca su IBAN y BIC en el siguiente formulario.',
            COMMENT3: "2. Descargue el documento llamado «orden de domiciliación SEPA». Rellene el documento descargado. No olvide firmarlo.",
            COMMENT4: "3. Escanee la orden firmada y cárguela haciendo clic en «Examinar»."
          },
          STAGE_ONE: {
            TITLE: 'Paso 1',
            COMMENT: 'Introduzca su IBAN y BIC en el siguiente formulario.',
            IBAN: 'IBAN',
            BIC: 'BIC'
          },
          STAGE_TWO: {
            TITLE: 'Paso 2',
            COMMENT1: 'Haga clic en este enlace para generar una orden de domiciliación SEPA.',
            COMMENT2: "Rellénela e imprímala haciendo clic en «Imprimir esta página».",
            COMMENT3: 'Firme la orden.'
          },
          STAGE_THREE: {
            TITLE: 'Paso 3',
            COMMENT1: "Escanee la orden firmada y cárguela + Kbis + RIB haciendo clic en «Examinar».",
            COMMENT2: 'O envíenos los documentos por correo electrónico a la dirección',
            SEPA: 'Orden SEPA + Kbis + RIB'
          },
          IMPORT: 'Importar',
          CANCEL: 'cancelar'
        },
        OPTIONS: {
          TITLE: 'Opciones',
          AUTOMATE_TASK: {
            TITLE: 'Automatice sus tareas repetitivas',
            COMMENT1: 'Elija la configuración por defecto de su cuenta y de sus envíos.',
            COMMENT2: '¿Envía con frecuencia el mismo tipo de paquetes?',
            COMMENT3: 'Aumente su eficacia al tramitar sus pedidos: la configuración de envío elegida aparecerá por defecto en todos sus envíos.',
            COMMENT4: 'No obstante, podrá modificar los valores de la configuración individualmente durante el procedimiento del pedido.'
          },
          DEFAULT_VALUES: 'Valores por defecto para sus envíos',
          INFORMATION: {
            TITLE: 'Información sobre sus envíos',
            TYPE: {
              TITLE: '¿Qué tipo de embalaje usa más a menudo?',
              ENVELOPE: '&nbsp;Sobre&nbsp;',
              PARCEL: '&nbsp;Paquete&nbsp;',
              PALLET: '&nbsp;Palet&nbsp;'
            },
            SHIPMENT_SIZE: {
              TITLE: '¿Envía usted con regularidad el mismo tipo de envío (cantidad, peso, dimensiones del paquete)?',
              NO: 'N.°',
              UNIT: 'Peso /u',
              DIMENSIONS: 'Dimensiones',
              NAME: 'Apellido',
              LENGTH: 'Long.',
              WIDTH: 'Anch.',
              HEIGHT: 'Alt.',
              CHANGE_UNIT: 'Cambiar unidad'
            },
            PARCELS_SIZE: {
              TITLE: 'Configure las dimensiones estándar de sus paquetes :',
              ADD_DIMENSION: 'Añadir una dimensión'
            },
            PARCELS_REASON: '¿Cuál es la razón la más frecuente para sus envíos?',
            SHIPMENT_CONTENT: '¿Que contienen sus envíos?',
            LABEL_FORMAT: 'Formato de etiquetas'
          },
          TRANSPORT_OFFERS: {
            TITLE: 'Selección de las ofertas de transporte',
            LIKE_CARRIER: '¿Qué transportista desea utilizar?',
            COLLECTION_METHOD: '¿Tipo de recogida deseada?',
            DELIVERY_METHOD: '¿Tipo de entrega deseada?'
          },
          INSURANCE: {
            TITLE: '3 Valor y seguro complementario opcional',
            VALUE: '¿Cuál es el valor de sus envíos?',
            REAL_VALUE: '¿Desea asegurar sus envíos al valor real (coste: 0,6 % del valor, mínimo 4,5 €)?',
            YES: '&nbsp;Sí',
            NO: '&nbsp;No'
          },
          PICKUP: {
            TITLE: 'Recogida de sus envíos',
            OPEN_HOURS: '¿Cuáles son sus horarios de apertura?',
            COLLECTION: '&nbsp;Recogida seleccionada (según disponibilidad del transportista)',
            BETWEEN: 'Entre&nbsp;',
            AND: '&nbsp;y&nbsp;',
            DROP_OFF: 'Prefiero dejar mis paquetes en agencia'
          },
          ABROAD: {
            TITLE: 'Envío al extranjero',
            ADD_DESCRIPTION: 'Añade una descripción (en inglés) y/o un código aduanero para su mercancía',
            ITEM: 'Indique el país de origen, la cantidad de sus artículos y el precio unitario de su mercancía',
            COUNTRY: 'País',
            QUANTITY: 'Cantidad',
            PRICE: 'PRECIO /u'
          },
          TAXES: {
            TITLE: 'Cuenta para el pago de los derechos y tasas',
            UPS: '¿Tiene una cuenta UPS (necesaria para las importaciones con este transportista)?',
            ACCOUNT_NUMBER: 'Número de cuenta',
            POSTCODE: 'Código postal',
            COUNTRY: 'País'
          },
          NOTIFICATION: {
            TITLE: 'Email y notificaciones',
            RECEIVER: 'Envíe una notificación de pedido por mail al destinatario, señalándole la fecha de entrega prevista del envío',
            WAYBILL: 'Recibir los albaranes y facturas por correo electrónico',
            DELIVERY: 'Recibir las confirmaciones de entrega y solicitudes de evaluación por correo electrónico',
            NEWSLETTER: 'Recibir los albaranes y facturas por correo electrónico'
          },
          SAVE: 'Registrar',
          CANCEL: 'Cancelar'
        },
        EMAIL: {
          TITLE: 'Cambiar e-mail',
          COMMENT: 'Introduzca un nuevo e-mail y contraseña',
          CURRENT: 'E-mail actual',
          NEW: 'Nuevo e-mail',
          CONFIRM: 'Confirmar e-mail',
          PASSWORD: 'Contraseña',
          SAVE: 'Registrar',
          CANCEL: 'Cancelar'
        },
        PASSWORD: {
          TITLE: 'Cambiar contraseña',
          COMMENT: 'Veuillez saisir votre ancien et votre nouveau mot de passe',
          OLD: 'Antigua contraseña',
          NEW: 'Nueva contraseña',
          CONFIRM: 'Confirmar la contraseña',
          SAVE: 'Registrar',
          CANCEL: 'Cancelar'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(MySettingsTranslate);
})();
