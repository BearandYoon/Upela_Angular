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
          REGISTER: 'Register'
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
            CNANGE_UNIT: 'Change unit of measure',
            DATE: 'Date',
            COLLECTION_DATE: 'Collection date requested',
            COMPARE_OFFER: 'COMPARE THE OFFERS!'
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
          REGISTER: 'Inscription'
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
            CNANGE_UNIT: 'Changer unité',
            DATE: 'Date',
            COLLECTION_DATE: 'Date d\'enlèvement souhaitée',
            COMPARE_OFFER: 'COMPAREZ LES OFFRES !'
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
          REGISTER: 'Inscripción'
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
            CNANGE_UNIT: 'Cambiar unidad',
            DATE: 'El:',
            COLLECTION_DATE: 'Fecha de recogida deseada',
            COMPARE_OFFER: '¡COMPARE LAS OFERTAS!'
          }
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(MainTranslate);
})();
