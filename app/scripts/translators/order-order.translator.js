/**
 * Created by bear on 11/10/16.
 */
(function () {

  'use strict';

  function OrderOrderTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      ORDER_ORDER: {
        TITLE: 'Step 3 : Your order',
        COMMENT: 'Complete your choice',
        OPEN_ADD_BOOK: 'open address book',
        SAVE_ADD_BOOK: 'Save this address in my address book',
        SENDER: {
          TITLE: 'SENDER',
          COMPANY: 'Company',
          NAME: 'Name',
          PHONE: 'Phone',
          EMAIL: 'Email',
          ADDRESS: 'Address',
          COUNTRY: 'Country',
          POSTAL: 'Postal code',
          CITY: 'City',
          REF: 'Your ref.',
          OTHERS: 'Others'
        },
        RECIPIENT: {
          TITLE: 'RECIPIENT',
          COMPANY: 'Company',
          NAME: 'Name',
          CELL_PHONE: 'Cellphone',
          EMAIL: 'Email',
          ADDRESS: 'Address',
          COUNTRY: 'Country',
          POSTAL: 'Postal code',
          CITY: 'City',
          REF: 'Your ref.',
          SEND_EMAIL: 'Send an e-mail notification to the recipient'
        },
        CHARACTERISTICS: {
          TITLE: 'Characteristics',
          REASON: 'Reason',
          CONTENT: 'Content',
          PROHIBIT: 'Prohibited Goods'
        },
        INSURANCE: {
          TITLE: 'Insurance',
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
        OBLIGATIONS: {
          TITLE: 'Customs obligations',
          COMMENT1: 'Documents and taxes may be requested. Please refer to our section <a target="_blank" href="https://www.upela.com/en/documents-for-an-international-consignment-25.html">International shipping</a>',
          COMMENT2: 'So that your shipment is carried in the correct conditions, complete the following fields',
          DETAIL: 'DETAILS OF THE GOODS',
          DESCRIPTION: 'DESCRIPTION',
          COUNTRY: 'COUNTRY',
          QTY: 'QTY',
          UNIT: 'Unit price',
          TOTAL: 'TOTAL €',
          VAT: 'The customs duties and VAT are not included in the transport costs.'
        },
        VOUCHER: {
          TITLE: 'Voucher code or Apporteur code',
          APPORTEUR: 'Apporteur code',
          VOUCHER: 'Voucher code'
        },
        PICKUP: {
          TITLE: 'Pickup',
          COLLECTION: 'Collection chosen (subject to the carrier availability)',
          DATE: 'Date',
          BETWEEN: '&nbsp;&nbsp;Between&nbsp;',
          DROP_OFF: 'I drop off my parcel at',
          NEAREST: 'See the nearest collection points'
        },
        INFORMATION: {
          TITLE: 'INFORMATION & CUSTOMS OBLIGATIONS',
          COMMENT: 'To a private individual, only paper documents without market or reconstruction value are allowed. Any object or merchandise of any kind will be retained by Customs.<br><br> To a company, you need to provide a very detailed description of the contents of your shipment (eg, "white long sleeve shirt 100% cotton"), an original commercial invoice + 2 copies.',
          TRANSPORT_LABEL: 'Before confirming your order, check that the sender is able to print out the transport label.',
          DAMAGE: 'Your package should be properly wrapped and protected: inadequate packaging will preclude damage claims.'
        },
        HAZARDOUS: {
          TITLE: 'I declare that my shipment <strong>does not contain any following hazardous products</strong> :',
          LITHIUM: 'Lithium batteries alone (<a href="https://www.upela.com/en/prohibited-controlled-goods-23.html" target="_blank">further details +</a>)',
          PERFUME: 'Perfumes',
          ELECTRONIC: 'Electronic smoking devices (<a href="https://www.upela.com/en/prohibited-controlled-goods-23.html" target="_blank">further details +</a>)',
          AEROSOLS: 'Aerosols, gas bottles, extinguishers',
          OTHERS: 'Or any other product with this kind of symbol. It will be then your full responsibility in case of incidence :'
        },
        TERMS_CONDITION: 'I accept <a href="images/files/upload/cgv/CGV_Upela.pdf" target="_blank">terms and conditions of the Upela.com website</a> and the <a href="images/files/upload/cgv/CGV UPS En.pdf" target="_blank">terms and conditions of the carrier</a>',
        CONTINUE: ' Continue',
        CONTACT: 'Information that is collected is subject to computer processing to ensure the good routing of your shipments. Data may be passed to: DHL, FedEx, or UPS to allow the performance of the contract.<br>In accordance with the law of Data Protection of January 6th, 1978, amended in 2004, you have the right to access and rectify all data concerning you, writing to: <a href="mailto:contact@upela.com">contact@upela.com</a>, Philippe Boulay<br>You can also, for legitimate reasons, oppose the processing of your personal data.'
      }
    });

    $translateProvider.translations('fr', {
      ORDER_ORDER: {
        TITLE: 'Etape 3 : Votre commande',
        COMMENT: 'Finaliser votre choix',
        OPEN_ADD_BOOK: 'ouvrir carnet d’adresse',
        SAVE_ADD_BOOK: 'Sauvegarder cette adresse dans mon carnet',
        SENDER: {
          TITLE: 'EXPÉDITEUR ',
          COMPANY: 'Société',
          NAME: 'Nom',
          PHONE: 'Téléphone',
          EMAIL: 'Email',
          ADDRESS: 'Adresse',
          COUNTRY: 'Pays',
          POSTAL: 'Code postal',
          CITY: 'Ville',
          REF: 'Votre Ref.',
          OTHERS: 'Autres'
        },
        RECIPIENT: {
          TITLE: 'DESTINATAIRE ',
          COMPANY: 'Société',
          NAME: 'Nom',
          CELL_PHONE: 'Tél mobile',
          EMAIL: 'Email',
          ADDRESS: 'Adresse',
          COUNTRY: 'Pays',
          POSTAL: 'Postal code',
          CITY: 'Ville',
          REF: 'Votre Ref.',
          SEND_EMAIL: 'Envoyez une notification par mail au destinataire'
        },
        CHARACTERISTICS: {
          TITLE: 'Caractéristiques',
          REASON: 'Raison',
          CONTENT: 'Contenu',
          PROHIBIT: 'Marchandises interdites'
        },
        INSURANCE: {
          TITLE: 'Assurance',
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
        OBLIGATIONS: {
          TITLE: 'Customs obligations',
          COMMENT1: 'Documents and taxes may be requested. Please refer to our section <a target="_blank" href="https://www.upela.com/en/documents-for-an-international-consignment-25.html">International shipping</a>',
          COMMENT2: 'So that your shipment is carried in the correct conditions, complete the following fields',
          DETAIL: 'DETAILS OF THE GOODS',
          DESCRIPTION: 'DESCRIPTION',
          COUNTRY: 'COUNTRY',
          QTY: 'QTY',
          UNIT: 'Unit price',
          TOTAL: 'TOTAL €',
          VAT: 'The customs duties and VAT are not included in the transport costs.'
        },
        VOUCHER: {
          TITLE: 'Bon de réduction ou code apporteur',
          APPORTEUR: 'Code Apporteur',
          VOUCHER: 'Bon de réduction'
        },
        PICKUP: {
          TITLE: 'Enlèvement',
          COLLECTION: 'Enlèvement souhaité (sous réserve des disponibilités du transporteur)',
          DATE: 'Date',
          BETWEEN: 'Entre',
          DROP_OFF: 'I drop off my parcel at',
          NEAREST: 'See the nearest collection points'
        },
        INFORMATION: {
          TITLE: 'INFORMATIONS',
          COMMENT: 'To a private individual, only paper documents without market or reconstruction value are allowed. Any object or merchandise of any kind will be retained by Customs.<br><br> To a company, you need to provide a very detailed description of the contents of your shipment (eg, "white long sleeve shirt 100% cotton"), an original commercial invoice + 2 copies.',
          TRANSPORT_LABEL: "Avant de confirmer votre commande, vérifiez que l'expéditeur pourra imprimer le bordereau de transport.",
          DAMAGE: "Votre envoi doit être correctement emballé et protégé, un défaut d'emballage vous privera de tout recours en cas de détérioration."
        },
        HAZARDOUS: {
          TITLE: 'Je déclare que mon envoi <strong>ne contient aucun des produits dangereux suivants</strong> :',
          LITHIUM: 'Batteries Lithium seule (<a href="https://www.upela.com/en/prohibited-controlled-goods-23.html" target="_blank">en savoir +</a>)',
          PERFUME: 'Parfum',
          ELECTRONIC: 'Cigarettes électroniques (<a href="https://www.upela.com/en/prohibited-controlled-goods-23.html" target="_blank">en savoir +</a>)',
          AEROSOLS: 'Aérosols, Bouteilles de gaz, Extincteurs',
          OTHERS: 'Ou tout autre produit portant un symbole de ce type, votre responsabilité pourrait être engagée :'
        },
        TERMS_CONDITION: 'J&apos;accepte <a href="images/files/upload/cgv/CGV_Upela.pdf" target="_blank">les conditions générales d&apos;utilisation du site web Upela.com</a> ainsi que les  <a href="images/files/upload/cgv/CGV UPS En.pdf" target="_blank">conditions générales du transporteur</a>',
        CONTINUE: 'Continuer',
        CONTACT: 'Les informations recueillies font l’objet d’un traitement informatique destiné au bon acheminement de vos expéditions. Les données pourront être transmises à : DHL, Fedex ou UPS afin de permettre l’exécution de la prestation objet du contrat. <br>Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant à : <a href="mailto:contact@upela.com">contact@upela.com</a>, Philippe Boulay.<br> Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.'
      }
    });

    $translateProvider.translations('es', {
      ORDER_ORDER: {
        TITLE: 'Paso 3 : Su pedido',
        COMMENT: 'Finalizar su elección',
        OPEN_ADD_BOOK: 'abrir libreta de direcciones',
        SAVE_ADD_BOOK: 'Guardar esta dirección en mi agenda',
        SENDER: {
          TITLE: 'REMITENTE',
          COMPANY: 'Empresa',
          NAME: 'Nombre',
          PHONE: 'Teléfono',
          EMAIL: 'Correo electrónico',
          ADDRESS: 'Dirección',
          COUNTRY: 'País',
          POSTAL: 'Código postal',
          CITY: 'Ciudad',
          REF: 'Su ref.',
          OTHERS: 'Otros datos'
        },
        RECIPIENT: {
          TITLE: 'DESTINATARIO',
          COMPANY: 'Empresa',
          NAME: 'Nombre',
          CELL_PHONE: 'Tfno móvil',
          EMAIL: 'Correo electrónico',
          ADDRESS: 'Dirección',
          COUNTRY: 'País',
          POSTAL: 'Código postal',
          CITY: 'Ciudad',
          REF: 'Su ref.',
          SEND_EMAIL: 'Envíe una notificación por correo al destinatario'
        },
        CHARACTERISTICS: {
          TITLE: 'Características',
          REASON: 'Motivo',
          CONTENT: 'Contenido',
          PROHIBIT: 'Mercancías prohibidas'
        },
        INSURANCE: {
          TITLE: 'Seguro',
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
        OBLIGATIONS: {
          TITLE: 'Customs obligations',
          COMMENT1: 'Documents and taxes may be requested. Please refer to our section <a target="_blank" href="https://www.upela.com/en/documents-for-an-international-consignment-25.html">International shipping</a>',
          COMMENT2: 'So that your shipment is carried in the correct conditions, complete the following fields',
          DETAIL: 'DETAILS OF THE GOODS',
          DESCRIPTION: 'DESCRIPTION',
          COUNTRY: 'COUNTRY',
          QTY: 'QTY',
          UNIT: 'Unit price',
          TOTAL: 'TOTAL €',
          VAT: 'The customs duties and VAT are not included in the transport costs.'
        },
        VOUCHER: {
          TITLE: 'Cupón de descuento o Código intermediario',
          APPORTEUR: 'Código del intermediario',
          VOUCHER: 'Cupón de descuento'
        },
        PICKUP: {
          TITLE: 'Recogida',
          COLLECTION: 'Recogida seleccionada (según disponibilidad del transportista)',
          DATE: 'El',
          BETWEEN: 'Entre',
          DROP_OFF: 'I drop off my parcel at',
          NEAREST: 'See the nearest collection points'
        },
        INFORMATION: {
          TITLE: 'INFORMACIÓN',
          COMMENT: 'To a private individual, only paper documents without market or reconstruction value are allowed. Any object or merchandise of any kind will be retained by Customs.<br><br> To a company, you need to provide a very detailed description of the contents of your shipment (eg, "white long sleeve shirt 100% cotton"), an original commercial invoice + 2 copies.',
          TRANSPORT_LABEL: 'Antes de confirmar su pedido, compruebe que el remitente pueda imprimir el albarán de transporte.',
          DAMAGE: 'Su envío debe estar correctamente embalado y protegido, cualquier defecto en el embalaje le impedirá recurrir en caso de deterioro.'
        },
        HAZARDOUS: {
          TITLE: 'Declaro que mi envío <strong>contiene ningún producto peligroso incluyendo los siguientes</strong> :',
          LITHIUM: 'Baterías de litio solo (<a href="https://www.upela.com/en/prohibited-controlled-goods-23.html" target="_blank">más información</a>)',
          PERFUME: 'Perfume',
          ELECTRONIC: 'Cigarrillo electrónico (<a href="https://www.upela.com/en/prohibited-controlled-goods-23.html" target="_blank">más información</a>)',
          AEROSOLS: 'Aerosoles, botella de gas, extintor',
          OTHERS: 'O cualquier producto llevando un símbolo de este tipo, su responsabilidad podría verse comprometida en caso de incidente :'
        },
        TERMS_CONDITION: 'Acepto las <a href="images/files/upload/cgv/CGV_Upela.pdf" target="_blank">condiciones generales de la página Web Upela.com</a> y las <a href="images/files/upload/cgv/CGV UPS En.pdf" target="_blank">condiciones generales del transportista</a>',
        CONTINUE: 'Continuar',
        CONTACT: 'La empresa Upela recopila sus datos en este formulario para la gestión de su pedido; toda la información obligatoria que se solicita es necesaria para la correcta ejecución de la solicitud.<br>Los datos recogidos podrán ser transferidos a: DHL, FedEx o UPS para permitir la ejecución de la prestación objeto del contrato.<br>Usted dispone de un derecho de acceso, rectificación y oposición al tratamiento de los datos que le conciernen.<br>Según la ley francesa “informática y libertades” del 6 de enero 1978 modificada en 2004, usted tiene un derecho de acceso y de rectificación a las informaciones que le conciernen, que pueden ejercer contactando Philippe Boulay a <a href="mailto:contact@upela.com">contact@upela.com</a>.<br>También usted puede, con razón legítima, oponerse al tratamiento de los datos que lo conciernen.'
      }
    });
  }

  angular.module('UpelaApp')
    .config(OrderOrderTranslate);
})();
