/**
 * Created by bear on 11/9/16.
 */
(function () {

  'use strict';

  function OrderOfferTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      ORDER: {
        STEP_TITLE: {
          SHIPMENT: '1. Your shipment',
          OFFERS: '2. The offers',
          ORDER: '3. Your order',
          PAYMENT: '4. Payment',
          CONFIRMATION: '5. Confirmation'
        },
        STEPS: {
          ONE: 'Step 1',
          TWO: 'Step 2',
          THREE: 'Step 3',
          FOUR: 'Step 4',
          FIVE: 'Step 5'
        }
      },
      ORDER_OFFER: {
        TITLE: 'Step 2 : The offers',
        COMMENT: 'Compare and select the best priced offer!',
        PAST_STEP: {
          TITLE: '1. Your shipment&nbsp;&nbsp;',
          TYPE: '<strong>Type :</strong>',
          FROM: '<strong>From</strong>',
          TO: '<strong>To</strong>',
          DATE: '<strong>Collection date</strong>',
          COMMENT: 'Our prices include fuel supplements, Air Cargo Security and all other supplements - residential address, remote location, oversize, extra handling supplements …. <strong>but do not include taxes and duties, nor possible customs checks, weight or dimensions amendments, address amendments</strong>...',
          MORE_INFO: 'More infos',
          EMAIL: 'Send by email'
        },
        OFFERS: {
          TITLE: 'All offers',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        COURIERS: {
          TITLE: 'Couriers',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        EXPRESS: {
          TITLE: 'Express',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        STANDARD: {
          TITLE: 'Standard',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        QUESTION: {
          TITLE: 'Frequently asked questions',
          COMMENT1: 'Comment effectuer un devis ?',
          COMMENT2: 'Est-ce que vous fournissez/effectuez l’emballage ?',
          COMMENT3: 'Que se passe-t-il si je ne suis pas présent lors de la livraison ?',
          COMMENT4: 'Le destinataire peut-il également passer commande ?',
          COMMENT5: 'Je ne veux pas que ce soit le destinataire qui paye les droits et taxes, comment puis-je faire ?',
          COMMENT6: 'Le coursier n’a pas pu récupérer mon colis car l’adresse de l’expéditeur était incomplète, que dois-je faire ?',
          COMMENT7: 'Le suivi de mon envoi n’affiche aucune information, comment cela se fait ?',
          COMMENT8: 'Si mon colis est livré avec du retard, puis-je me faire rembourser ?'
        }
      }
    });

    $translateProvider.translations('fr', {
      ORDER: {
        STEP_TITLE: {
          SHIPMENT: '1. Votre expédition',
          OFFERS: '2. Les offres',
          ORDER: '3. Votre commande',
          PAYMENT: '4. Paiement',
          CONFIRMATION: '5. Confirmation'
        },
        STEPS: {
          ONE: 'Step 1',
          TWO: 'Step 2',
          THREE: 'Step 3',
          FOUR: 'Step 4',
          FIVE: 'Step 5'
        }
      },
      ORDER_OFFER: {
        TITLE: 'Etape 2 : Les offres',
        COMMENT: 'Comparez et selectionnez les offres aux meilleurs prix !',
        PAST_STEP: {
          TITLE: '1. Votre expédition&nbsp;&nbsp;',
          TYPE: '<strong>Type :</strong>',
          FROM: '<strong>De :<strong>',
          TO: '<strong>A :<strong>',
          DATE: '<strong>Date de ramassage:<strong>',
          COMMENT: 'Nos tarifs incluent la taxe carburant, la sûreté du fret aérien et tous les suppléments du type : adresse résidentielle, zone éloignée, hors gabarit, frais de manutention supplémentaire...',
          MORE_INFO: 'More infos',
          EMAIL: 'Envoyer par email'
        },
        OFFERS: {
          TITLE: 'Toutes les offres',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        COURIERS: {
          TITLE: 'Coursiers',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        EXPRESS: {
          TITLE: 'Express',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        STANDARD: {
          TITLE: 'Standard',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        QUESTION: {
          TITLE: 'Questions fréquentes',
          COMMENT1: 'Comment effectuer un devis ?',
          COMMENT2: 'Est-ce que vous fournissez/effectuez l’emballage ?',
          COMMENT3: 'Que se passe-t-il si je ne suis pas présent lors de la livraison ?',
          COMMENT4: 'Le destinataire peut-il également passer commande ?',
          COMMENT5: 'Je ne veux pas que ce soit le destinataire qui paye les droits et taxes, comment puis-je faire ?',
          COMMENT6: 'Le coursier n’a pas pu récupérer mon colis car l’adresse de l’expéditeur était incomplète, que dois-je faire ?',
          COMMENT7: 'Le suivi de mon envoi n’affiche aucune information, comment cela se fait ?',
          COMMENT8: 'Si mon colis est livré avec du retard, puis-je me faire rembourser ?'
        }
      }
    });

    $translateProvider.translations('es', {
      ORDER: {
        STEP_TITLE: {
          SHIPMENT: '1. Su envío',
          OFFERS: '2. Ofertas',
          ORDER: '3. Su pedido',
          PAYMENT: '4. Pago',
          CONFIRMATION: '5. Confirmación'
        },
        STEPS: {
          ONE: 'Step 1',
          TWO: 'Step 2',
          THREE: 'Step 3',
          FOUR: 'Step 4',
          FIVE: 'Step 5'
        }
      },
      ORDER_OFFER: {
        TITLE: 'Paso 2 : Ofertas',
        COMMENT: '¡Compare y seleccione las ofertas a los mejores precios!',
        PAST_STEP: {
          TITLE: '1. Su envío&nbsp;&nbsp;',
          TYPE: '<strong>Tipo :</strong>',
          FROM: '<strong>De :</strong>',
          TO: '<strong>Hacia :</strong>',
          DATE: '<strong>Fecha de recogida :</strong>',
          COMMENT: 'Nuestras tarifas incluyen las tasas de carburante, la seguridad de la carga aérea y todos los suplementos del tipo: dirección residencial, zona alejada, exceso de tamaño, gastos adicionales de manipulación...',
          MORE_INFO: 'More infos',
          EMAIL: 'Enviar por correo electrónico'
        },
        OFFERS: {
          TITLE: 'Todas las ofertas',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        COURIERS: {
          TITLE: 'Mensajeros',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        EXPRESS: {
          TITLE: 'Exprés',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        STANDARD: {
          TITLE: 'Estándar',
          SHIPPING: 'Shipping',
          PRICE: 'Price'
        },
        QUESTION: {
          TITLE: 'Preguntas Frecuentes',
          COMMENT1: 'Comment effectuer un devis ?',
          COMMENT2: 'Est-ce que vous fournissez/effectuez l’emballage ?',
          COMMENT3: 'Que se passe-t-il si je ne suis pas présent lors de la livraison ?',
          COMMENT4: 'Le destinataire peut-il également passer commande ?',
          COMMENT5: 'Je ne veux pas que ce soit le destinataire qui paye les droits et taxes, comment puis-je faire ?',
          COMMENT6: 'Le coursier n’a pas pu récupérer mon colis car l’adresse de l’expéditeur était incomplète, que dois-je faire ?',
          COMMENT7: 'Le suivi de mon envoi n’affiche aucune information, comment cela se fait ?',
          COMMENT8: 'Si mon colis est livré avec du retard, puis-je me faire rembourser ?'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(OrderOfferTranslate);
})();
