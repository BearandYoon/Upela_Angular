/**
 * Created by bear on 11/4/16.
 */
(function () {

  'use strict';

  function MainTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      MAIN: {
        TITLE: 'Upela',
        MENU: {
          PROFESSIONALS: 'Professionals',
          SERVICES: {
            TITLE: 'Services',
            DESTINATIONS: {
              TITLE: 'Destinations',
              AFRICA: 'Africa',
              AMERICA: 'America',
              ASIA: 'Asia',
              DOM_TOM: 'DOM-TOM',
              EASTERN_EUROPE: 'Eastern Europe',
              EUROPE: 'Europe',
              MIDDLE_EAST: 'Middle East'
            },
            EXPRESS_COURIER: {
              TITLE: 'Express courier',
              FRANCE: 'France',
              EUROPE: 'Europe',
              AIX: 'Aix en Provence',
              BORDEAUX: 'Bordeaux',
              LILLE: 'Lille',
              LYON: 'Lyon',
              MARSEILLE: 'Marseille',
              MONTPELLIER: 'Montpellier',
              NANTES: 'Nantes',
              NICE: 'Nice',
              PARIS: 'Paris',
              RENNES: 'Rennes',
              STRASBOURG: 'Strabourg',
              TOULOUSE: 'Toulouse'
            },
            CARRIERS: {
              TITLE: 'Carriers',
              CHRONOPOST: 'Chronopost',
              COLISSIMO: 'Colissimo',
              DHL: 'DHL',
              DPD: 'DPD',
              FEDEX: 'FedEx',
              MONDIAL: 'Mondial Relay',
              TNT: 'TNT',
              UPS: 'UPS'
            }
          },
          TRACKING: 'Tracking',
          HELP: 'Help',
          BLOG: 'Blog',
          CONTACT: 'Contact',
          LOGIN: 'Login',
          LOGOUT: 'Logout',
          REGISTER: 'Register',
          ACCOUNT: 'My account',
          SHIPMENTS: 'My shipments',
          INVOICES: 'My invoices',
          PAYMENTS: 'My payments',
          CONTACTS: 'My contacts',
          SETTINGS: 'Settings'
        },
        PAGES: {
          TITLE: 'Upela: compare quotes from carriers for the delivery and tracking of your consignments, parcels or pallets for professionals or individuals',
          PAGE_ONE: {
            E_MERCHANTS: 'E-merchants',
            TEXT: 'Centralize all your sendings<br>Save time, avoid mistakes'
          },
          PAGE_TWO: {
            PRO: 'N°1 for the PROs',
            TEXT: '+20,000 customers<br> Immediate discounts <br> Deferred payment by Sepa'
          },
          PAGE_THREE: {
            TITLE1: 'Delivery Day+1 ',
            TITLE2: 'More than 220 destinations',
            EUROPE: 'Europe',
            USA: 'USA',
            MIDDLE_EAST: 'Middle East',
            AFRICA: 'Africa',
            ASIA: 'Asia',
            FOOTER: {
              TITLE: 'Public rates tax inc.',
              LINK: '&gt;&nbsp;PRO rate?',
              FOOTER: '(* from)'
            }
          },
          PAGE_FOUR: {
            TITLE: 'Simplify your exports <br>with the express shipping leaders<br>at the lowest prices',
            OPTION1: 'Door-to-Door Delivery',
            OPTION2: 'Customs service included',
            OPTION3: 'Personality Tip'
          },
          PAGE_FIVE: {
            TITLE: 'Why the PROs<br>choose us?',
            OPTION1: 'to simplify their deliveries',
            OPTION2: 'to gain time',
            OPTION3: 'for our rates',
            OPTION4: 'for our experience',
            OPTION5: 'for our destinations'
          }
        },
        DIALOG: {
          TITLE1: 'Begin a shipment',
          TITLE2: 'How doew it work?',
          TYPE: {
            TITLE: 'Type',
            ENVELOPE: 'Envelope',
            PARCEL: 'Parcel',
            PALLET: 'Pallet'
          },
          ORIGIN: {
            TITLE: 'Origin',
            TOWN: 'Postcode, Town',
            ADDRESS: 'Business address'
          },
          DESTINATION: {
            TITLE: 'Destination',
            TOWN: 'Postcode, Town',
            ADDRESS: 'Business address'
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
            CHANGE_UNIT: 'Change unit of measure',
            DATE: 'Date',
            COLLECTION_DATE: 'Collection date requested',
            COMPARE_OFFER: 'COMPARE THE OFFERS!'
          }
        },
        FOOTER: {
          SERVICES: 'The reliability and service of the leaders in international express delivery',
          E_SHOPS: 'Discover our solutions for e-shops and MarketPlaces',
          ADVANTAGE: 'Take advantage of our programs',
          OPINION: 'Your opinion matters',
          COMMENT: {
            TITLE: 'UPELA, the best way to ship a parcel!',
            CONTENT: 'Thanks to UPELA exclusive prices, afford the services of the leaders in international express delivery while reducing your costs! Do not wait to find out about UPELA, in a few clicks, order your <strong>express delivery</strong> on our site. According to your choice, DHL, FEDEX or UPS will collect your shipment, an enveloppe, a <strong>bulky parcel or a pallet</strong> and deliver it to your recipient. UPELA takes care of the <strong> <a href="#">delivery of your parcels in France</a> </strong>, in <a href="">Europe</a>, in <a href="#">Asia</a> and in <a href="#">USA</a>, with full transparency since at any moment, you can track your <strong>parcel</strong>.'
          },
          INSTRUCTION: {
            TITLE: 'Instructions for the use of the UPELA price comparison for sending your parcels',
            CONTENT1: 'In order to send your <strong>mail, parcel or pallet</strong> internationally or in France, complete the information requested in the box "Begin sending": select the place of departure and destination in the drop-down list (type in the name of the city or the postal code). Tick the "business address" box if it is a business address, leave blank if it is a personal address. Enter the weight and size of your parcel. Choose the date that the carrier can collect your consignment. Compare our <strong>carriers rates</strong> by clicking on "compare offers!"',
            CONTENT2: 'Here you may access all of our <strong>quotes for express transportation</strong>. These give references to the name of the carrier (FedEx, DHL or UPS), the price of shipping (excluding and including all taxes), the expected delivery date and the type of carrier. If you have a <a href="#">UPELA professional account</a>, the <strong>price for parcels, mail and palettes</strong> are even more advantageous (the creation of a professional or individual account is free and without obligation).',
            CONTENT3: 'Once the method of <strong>express delivery</strong> has been selected, complete all the information concerning the sender and the addressee, or select your contacts in the address book. Also indicate the desired time period at the place where the consignment must be picked up. In the case of <strong>imported parcels</strong>, first check the availability of your correspondent. You may also drop off your package at the agency.',
            CONTENT4: 'A summary page summarises all the information of your consignment. Confirm your order and choose your credit card to access the secure online payment. With a pro Upela account you can <a href="#">pay for your consignment at a later date</a>.',
            CONTENT5: 'Your order is validated. You can print your transportation documents, view your invoice, view the parcel tracking or cancel your consignment. The information of your consignment are sent by email: your shipping note, pro-forma invoice (non European Union consignments) and your Upela invoice. All you have to do is stick your transport voucher on your package (envelope, parcel or pallet) and wait for the courier.'
          }
        }
      }
    });

    $translateProvider.translations('fr', {
      MAIN: {
        TITLE: 'Upela',
        MENU: {
          PROFESSIONALS: 'Professionals',
          SERVICES: {
            TITLE: 'Services',
            DESTINATIONS: {
              TITLE: 'Destinations',
              AFRICA: 'Afrique',
              AMERICA: 'Amérique',
              ASIA: 'Asie',
              DOM_TOM: 'DOM-TOM',
              EASTERN_EUROPE: 'Europe de l\'Est',
              EUROPE: 'Europe',
              MIDDLE_EAST: 'Moyen Orient'
            },
            EXPRESS_COURIER: {
              TITLE: 'Service coursier',
              FRANCE: 'France',
              EUROPE: 'Europe',
              AIX: 'Aix en Provence',
              BORDEAUX: 'Bordeaux',
              LILLE: 'Lille',
              LYON: 'Lyon',
              MARSEILLE: 'Marseille',
              MONTPELLIER: 'Montpellier',
              NANTES: 'Nantes',
              NICE: 'Nice',
              PARIS: 'Paris',
              RENNES: 'Rennes',
              STRASBOURG: 'Strabourg',
              TOULOUSE: 'Toulouse'
            },
            CARRIERS: {
              TITLE: 'Carriers',
              CHRONOPOST: 'Chronopost',
              COLISSIMO: 'Colissimo',
              DHL: 'DHL',
              DPD: 'DPD',
              FEDEX: 'FedEx',
              MONDIAL: 'Mondial Relay',
              TNT: 'TNT',
              UPS: 'UPS'
            }
          },
          TRACKING: 'Suivi',
          HELP: 'Assistance',
          BLOG: 'Blog',
          CONTACT: 'Contact',
          LOGIN: 'Se connecter',
          LOGOUT: 'Déconnexion',
          REGISTER: 'Inscription',
          ACCOUNT: 'Mon compte',
          SHIPMENTS: 'Mes envois',
          INVOICES: 'Mes factures',
          PAYMENTS: 'Mes règlements',
          CONTACTS: 'Mes contacts',
          SETTINGS: 'Paramètres'
        },
        PAGES: {
          TITLE: 'Upela : comparez les offres de transporteurs pour la livraison et le suivi de vos envois, colis ou palettes pour professionnels ou particuliers',
          PAGE_ONE: {
            E_MERCHANTS: 'E-commerçants',
            TEXT: 'Centralisez toutes vos expéditions<br>Gagnez du temps, évitez les erreurs'
          },
          PAGE_TWO: {
            PRO: 'N°1 chez les PRO',
            TEXT: '+20,000 clients<br> immédiate Remises <br> Paiement différé by Sepa'
          },
          PAGE_THREE: {
            TITLE1: 'Livraison J+1 ',
            TITLE2: '+ de 220 destinations...',
            EUROPE: 'Europe',
            USA: 'USA',
            MIDDLE_EAST: 'Moyen Orient',
            AFRICA: 'Afrique',
            ASIA: 'Asie',
            FOOTER: {
              TITLE: 'Tarifs publics TTC ',
              LINK: '&gt;&nbsp;Tarifs PRO ?',
              FOOTER: '(* à partir de)'
            }
          },
          PAGE_FOUR: {
            TITLE: "Simplifiez-vous l'export<br/>avec les leaders du transport<br/>express au meilleur prix",
            OPTION1: 'Livraison en porte-à-porte',
            OPTION2: 'Service douane intégré',
            OPTION3: 'Conseil personnalisé'
          },
          PAGE_FIVE: {
            TITLE: 'Pourquoi les PROS<br/>nous choisissent ?',
            OPTION1: 'pour simplifier leurs envois',
            OPTION2: 'pour gagner du temps',
            OPTION3: 'pour nos tarifs',
            OPTION4: 'pour notre expérience',
            OPTION5: 'pour nos destinations'
          }
        },
        DIALOG: {
          TITLE1: 'Commencez un envoi',
          TITLE2: 'Comment ça fonctionne ?',
          TYPE: {
            TITLE: 'Type',
            ENVELOPE: 'Pli',
            PARCEL: 'Colis',
            PALLET: 'Palette'
          },
          ORIGIN: {
            TITLE: 'Départ',
            TOWN: 'Code postal Ville',
            ADDRESS: 'Adresse commerciale'
          },
          DESTINATION: {
            TITLE: 'Destination',
            TOWN: 'Code postal Ville',
            ADDRESS: 'Adresse commerciale'
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
            CHANGE_UNIT: 'Changer unité',
            DATE: 'Date',
            COLLECTION_DATE: 'Date d\'enlèvement souhaitée',
            COMPARE_OFFER: 'COMPAREZ LES OFFRES !'
          }
        },
        FOOTER: {
          SERVICES: 'La fiabilité et le service des leaders de la livraison express internationale',
          E_SHOPS: 'Découvrez nos solutions e-boutiques et MarketPlaces',
          ADVANTAGE: 'Profitez de nos programmes',
          OPINION: 'Votre avis compte',
          COMMENT: {
            TITLE: "UPELA, la meilleure façon d'envoyer un colis !",
            CONTENT: "Grâce aux tarifs exclusifs UPELA, offrez vous les services des leaders du transport express international tout en réduisant vos coûts&nbsp;! N'attendez plus pour découvrir UPELA, en quelques clics seulement, commandez votre <strong>transport express</strong> sur notre site. Selon votre choix, DHL, FEDEX ou UPS vient chercher votre envoi, qu'il s'agisse d'un pli, d'un <strong>colis volumineux ou d'une palette</strong> et le livre à votre destinataire. UPELA assure la <strong><a href='#'>livraison de votre colis en France</a></strong>, <a href='#'>en Europe</a>, en <a href='#'>Asie</a> et aux <a href='#'>USA</a>, en toute transparence puisqu'à tout moment, vous pouvez suivre votre <strong>colis</strong>."
          },
          INSTRUCTION: {
            TITLE: "Mode d'emploi du comparateur de tarifs UPELA pour l'envoi de vos colis",
            CONTENT1: "Pour commencer votre <strong>envoi de pli, colis ou palette à l'international ou en France</strong>, remplissez les informations demandées dans l’encadré « Commencez un envoi » : sélectionnez les lieux de départ et de destination dans la liste déroulante (taper le nom de la ville ou son code postal). Cochez la case « adresse commerciale » s’il s’agit d'une adresse professionnelle, laissez vierge s’il s’agit d’une adresse personnelle. Indiquez le poids et les dimensions de votre colis. Choisissez la date à laquelle le transporteur viendra collecter votre envoi. Comparez nos <strong>tarifs transporteurs</strong> en cliquant sur 'comparez les offres!'",
            CONTENT2: "Vous accédez à tous nos <strong>devis de transport express</strong>. Ceux-ci référencent le nom du transporteur (Fedex, DHL ou UPS), le prix de l’expédition (HT et TTC), la date de livraison prévue ainsi que la formule du transporteur. Si vous avez <a href='#'>un compte professionnel UPELA</a>, les <strong>tarifs colis, pli et palette</strong> sont encore plus avantageux (la création d'un compte professionnel ou particulier est gratuite et sans engagement).",
            CONTENT3: "Une fois votre formule de <strong>livraison express</strong> sélectionnée, remplissez toutes les informations concernant l'expéditeur et le destinataire, ou sélectionnez vos contacts dans le carnet d'adresse. Indiquez également la tranche horaire d'enlèvement souhaitée sur le lieu de prise en charge de l’envoi. Dans le cas d’un <strong>import de colis</strong>, vérifiez préalablement les disponibilités de votre correspondant. Vous pouvez aussi déposer votre colis en agence.",
            CONTENT4: 'Une page récapitulative résume toutes les informations de votre envoi. Confirmez votre commande et choisissez votre carte bancaire pour accéder au paiement en ligne sécurisé. Avec un compte pro Upela vous pouvez <a href="#">régler votre expédition plus tard</a>.',
            CONTENT5: "Votre commande est validée. Vous pouvez imprimer vos documents de transport, visualiser votre facture, afficher le suivi colis ou annuler votre envoi. Les informations de votre envoi sont également envoyées par email : votre bordereau de transport, votre facture pro-forma (envois hors Union Européenne) et votre facture Upela. Vous n'avez plus qu'à coller votre bon de transport sur votre paquet (pli, colis ou palette) et attendre l'arrivée du coursier."
          }
        }
      }
    });

    $translateProvider.translations('es', {
      MAIN: {
        TITLE: 'Upela',
        MENU: {
          PROFESSIONALS: 'Profesionales',
          SERVICES: {
            TITLE: 'Servicios',
            DESTINATIONS: {
              TITLE: 'Destinos',
              AFRICA: 'África',
              AMERICA: 'América',
              ASIA: 'Asia',
              DOM_TOM: 'DOM-TOM',
              EASTERN_EUROPE: 'Europa oriental',
              EUROPE: 'Europa',
              MIDDLE_EAST: 'Oriente Medio'
            },
            EXPRESS_COURIER: {
              TITLE: 'Servicio mensajero',
              FRANCE: 'France',
              EUROPE: 'Europa',
              AIX: 'Aix en Provence',
              BORDEAUX: 'Bordeaux',
              LILLE: 'Lille',
              LYON: 'Lyon',
              MARSEILLE: 'Marseille',
              MONTPELLIER: 'Montpellier',
              NANTES: 'Nantes',
              NICE: 'Nice',
              PARIS: 'Paris',
              RENNES: 'Rennes',
              STRASBOURG: 'Strabourg',
              TOULOUSE: 'Toulouse'
            },
            CARRIERS: {
              TITLE: 'Transportistas',
              CHRONOPOST: 'Chronopost',
              COLISSIMO: 'Colissimo',
              DHL: 'DHL',
              DPD: 'DPD',
              FEDEX: 'FedEx',
              MONDIAL: 'Mondial Relay',
              TNT: 'TNT',
              UPS: 'UPS'
            }
          },
          TRACKING: 'Seguimiento',
          HELP: 'Asistencia',
          BLOG: 'Blog',
          CONTACT: 'Contacto',
          LOGIN: 'Iniciar sesión',
          LOGOUT: 'Desconexión',
          REGISTER: 'Inscripción',
          ACCOUNT: 'Mi cuenta',
          SHIPMENTS: 'Mis envíos',
          INVOICES: 'Mis facturas',
          PAYMENTS: 'Mis pagos',
          CONTACTS: 'Mis contactos',
          SETTINGS: 'Parámetros'
        },
        PAGES: {
          TITLE: 'Upela: compare las ofertas de transportistas para la entrega y seguimiento de sus envíos, paquetes o palets para profesionales o particulares',
          PAGE_ONE: {
            E_MERCHANTS: 'E-comerciante',
            TEXT: 'Centralice todos sus envíos<br>Ahorre tiempo, evite los errores'
          },
          PAGE_TWO: {
            PRO: 'N°1 entre los PROFESIONALES',
            TEXT: '+ 20 000 clientes<br> Descuentos inmediatos <br> Pago diferido Sepa'
          },
          PAGE_THREE: {
            TITLE1: 'Entrega D+1 ',
            TITLE2: '+ de 220 destinos...',
            EUROPE: 'Europa',
            USA: 'EE.UU.',
            MIDDLE_EAST: 'Oriente Medio',
            AFRICA: 'África',
            ASIA: 'Asia',
            FOOTER: {
              TITLE: 'Tarifas públicas imp. incl.',
              LINK: '&gt;&nbsp;Tarifas Profesionales ?',
              FOOTER: '(* a partir de)'
            }
          },
          PAGE_FOUR: {
            TITLE: 'Simplifique sus exportaciones <br>con los líderes del transporte<br>exprés a los mejores precios',
            OPTION1: 'Entrega puerta a puerta',
            OPTION2: 'Servicio de aduanas integrado',
            OPTION3: 'Consejo personalizado'
          },
          PAGE_FIVE: {
            TITLE: '¿Por qué nos eligen<br>los PROFESIONALES?',
            OPTION1: 'para simplificar sus envíos',
            OPTION2: 'para ganar tiempo',
            OPTION3: 'por nuestras tarifas',
            OPTION4: 'por nuestra experiencia',
            OPTION5: 'por nuestros destinos'
          }
        },
        DIALOG: {
          TITLE1: 'Comience el proceso de envío',
          TITLE2: '¿Cómo funciona?',
          TYPE: {
            TITLE: 'Tipo',
            ENVELOPE: 'Sobre',
            PARCEL: 'Paquete',
            PALLET: 'Palet'
          },
          ORIGIN: {
            TITLE: 'Salida',
            TOWN: 'Código postal, Ciudad',
            ADDRESS: 'Dirección de la empresa'
          },
          DESTINATION: {
            TITLE: 'Destino',
            TOWN: 'Código postal, Ciudad',
            ADDRESS: 'Dirección de la empresa'
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
            CHANGE_UNIT: 'Cambiar unidad',
            DATE: 'El:',
            COLLECTION_DATE: 'Fecha de recogida deseada',
            COMPARE_OFFER: '¡COMPARE LAS OFERTAS!'
          }
        },
        FOOTER: {
          SERVICES: 'La fiabilidad y el servicio de los líderes de la entrega internacional exprés',
          E_SHOPS: 'Descubra nuestras soluciones para tiendas en línea y Marketplaces',
          ADVANTAGE: 'Disfrute de nuestros programas',
          OPINION: 'Su opinión es importante',
          COMMENT: {
            TITLE: 'UPELA, ¡la mejor forma de enviar un paquete!',
            CONTENT: 'Gracias a las tarifas exclusivas de UPELA, disfrute de los servicios de los líderes del transporte exprés internacional a la vez que reduce sus costes. No espere más para descubrir UPELA, en solo unos clics, realice su pedido de <strong>transporte exprés</strong> en nuestro sitio web. Según su elección, FEDEX o UPS irán a buscar su envío, tanto si se trata de un sobre, de un <strong>paquete voluminoso o de un palet</strong> y se lo entrega a su destinatario. UPELA garantiza la <strong><a href="#">entrega de su paquete en Francia</a></strong>, en <a href="#">Europa</a>, en <a href="#">Asia</a> y en <a href="#">Estados Unidos</a>, con toda transparencia, ya que en todo momento puede seguir su <strong>paquete</strong>.'
          },
          INSTRUCTION: {
            TITLE: 'Instrucciones de uso del comparador de tarifas UPELA para el envío de sus paquetes',
            CONTENT1: 'Para comenzar el <strong>envío de sobres, paquetes o palets a destinos en Francia o internacionales</strong>, rellene la información solicitada en el cuadro «Comenzar un envío»: seleccione los lugares de origen y de destino en la lista desplegable (escriba el nombre de la ciudad o su código postal). Marque la casilla «dirección comercial» si se trata de una dirección profesional, déjela vacía si se trata de una dirección personal. Indique el peso y las dimensiones de su paquete. Indique la fecha de recogida del envío. Compare nuestras <strong>tarifas de transportistas</strong> haciendo clic en "¡Compare las ofertas!"',
            CONTENT2: 'Podrá acceder a todos nuestros <strong>presupuestos de transporte exprés</strong>. En los presupuestos se indica el nombre del transportista (Fedex, DHL o UPS), el precio del envío (sin y con IVA), la fecha de entrega prevista, así como la fórmula del transportista. Si tiene <a href="#">una cuenta profesional UPELA</a>, las <strong>tarifas de paquetes, sobres y palets</strong> son aún más ventajosas (la creación de una cuenta profesional o personal es gratuita y sin compromisos).',
            CONTENT3: 'Cuando haya seleccionado su fórmula de <strong>entrega exprés</strong>, rellene toda la información relacionada con el remitente y el destinatario, o seleccione sus contactos de la agenda. Indique también el tramo horario de recogida que desea en el lugar donde el transportista se hará cargo del envío. En el caso de una <strong>importación de paquete</strong>, compruebe con anterioridad la disponibilidad del remitente. También puede depositar su paquete en una agencia.',
            CONTENT4: 'Una página de resumen recoge toda la información de su envío. Confirme su pedido y elija su tarjeta bancaria para acceder al pago a través de una línea segura. Con una cuenta profesional de Upela, puede <a href="#">posponer el pago del envío para más adelante</a>.',
            CONTENT5: 'Se valida su pedido. Ahora puede imprimir la documentación del transporte, visualizar su factura, mostrar el seguimiento del paquete o cancelar el envío. La información sobre su envío normalmente se le envía por correo electrónico: el albarán de transporte, la factura pro&nbsp;forma (envíos fuera de la Unión Europea) y la factura de Upela. Ya solo tiene que pegar el albarán de transporte en el paquete (sobre, paquete o palet) y esperar a que llegue el mensajero.'
          }
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(MainTranslate);
})();
