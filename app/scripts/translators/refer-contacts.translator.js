/**
 * Created by bear on 11/17/16.
 */
(function () {

  'use strict';

  function ReferralTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      REFERRAL: {
        SPONSORSHIP: 'SPONSORSHIP',
        OPERATION: 'Operation : ',
        PRINCIPLE: '<br>The Win-Win Principle<br>',
        ACCORDING: 'according to&nbsp;',
        GIFT: 'with gift vouchers&nbsp;<br><br>',
        HOW_WORK: {
          TITLE: 'How does it work?',
          COMMENT: 'There are two options : ',
          OPTION1: {
            TITLE: 'Option No 1',
            COMMENT1: 'Invite your social media contacts:',
            COMMENT2: 'Just click here, and win €20 per sponsored person.',
            FACEBOOK: 'Share on Facebook',
            LINKEDIN: 'Share on Linkedin',
            VIADEO: 'Share on Viadeo'
          },
          OPTION2: {
            TITLE: 'Option No 2',
            ADD_EMAIL: 'Add the email of the contacts you want to refer.',
            ADD_MESSAGE: 'Add a personalized message:',
            MESSAGE: 'Message',
            SEND_INVITATION: 'Send invitations',
            COMMENT: 'You can also send by email the link below to your contacts:'
          },
          BENEFIT: {
            TITLE: '<a href="https://www.ticketkadeosonline.fr/Presentation.aspx">Ticket Kadéos® Online</a> voucher benefits',
            COMMENT1: 'Easy and practical, the gift voucher is directly emailed to beneficiary;',
            COMMENT2: 'It allows an easy and secured purchase on the Internet, 24/7;',
            COMMENT3: 'Scored : can be spent in one purchase or divided into several purchases;',
            COMMENT4: 'Compatible with other additional means of payment;',
            COMMENT5: 'Access to thousands of items on 36 online shops covering various industries;',
            COMMENT6: 'The beneficiary is allowed to exchange his Ticket Kadéos® Online voucher with a Ticket Kadéos® Infini.paper gift voucher.'
          }
        },
        RIGHT_SIDE: {
          ONLINE_SHOP: 'Ticket Kadéos® Online voucher give access to thousands of items on 36 online shops covering various industries',
          GIFT_VOUCHER: 'They are also redeemable for Ticket Kadeos Infini® paper gift vouchers',
          TERM_CONDITION: {
            TITLE: 'Terms and conditions:',
            COMMENT1: 'Offer cannot be combined with other commercial operations',
            COMMENT2: 'Valid for 12 months from the date on which the beneficiary has been emailed',
            COMMENT3: 'The Sponsored Person must not be an employee from the same company (or any subsidiary company belonging to the same group) as his Sponsor.',
            COMMENT4: 'A sponsor cannot sponsor himself',
            COMMENT5: 'The email address from the Sponsored Person must be different from the email address of his Sponsor'
          },
          NOTE: 'Please note that we invite you today to add to your address book the email address of the shipper of your Kadéos gift voucher: <a href="mailto:c.lopez@upela.com">c.lopez@upela.com</a>. Also, do not forget to check your “Junk Mail” or “Spam” folders.'
        }
      }
    });

    $translateProvider.translations('fr', {
      REFERRAL: {
        SPONSORSHIP: 'PARRAINAGE',
        OPERATION: 'Opération : ',
        PRINCIPLE: '<br><br>',
        ACCORDING: 'Le Gagnant-Gagnant selon',
        GIFT: 'avec les tickets cadeaux&nbsp;<br><br>',
        HOW_WORK: {
          TITLE: 'Comment ça fonctionne ?',
          COMMENT: 'Deux options s\'offrent à vous :',
          OPTION1: {
            TITLE: 'Option n° 1',
            COMMENT1: 'Invitez vos contacts sur les réseaux sociaux :',
            COMMENT2: 'Rien de plus simple, cliquez ici et gagnez 20€ par filleul.',
            FACEBOOK: 'Share on Facebook',
            LINKEDIN: 'Share on Linkedin',
            VIADEO: 'Share on Viadeo'
          },
          OPTION2: {
            TITLE: 'Option n° 2',
            ADD_EMAIL: 'Ajoutez les emails des contacts que vous souhaitez parrainer.',
            ADD_MESSAGE: 'Ajoutez un message personnalisé :',
            MESSAGE: 'Message',
            SEND_INVITATION: 'Envoyer les invitations',
            COMMENT: 'Vous pouvez également envoyer le lien suivant à vos contacts via votre messagerie :'
          },
          BENEFIT: {
            TITLE: 'Les avantages du chèque <a href="https://www.ticketkadeosonline.fr/Presentation.aspx">e-ticket Kadéos®</a>',
            COMMENT1: 'Simple et pratique, le chèque cadeau est envoyé directement par e-mail au bénéficiaire ',
            COMMENT2: 'Il permet un achat facile & sécurisé sur Internet, 24/24 et 7j/7',
            COMMENT3: 'Sécable : il peut être dépensé en une ou plusieurs fois',
            COMMENT4: 'Compatible avec d’autres modes de paiement complémentaire',
            COMMENT5: 'Accès à des milliers de produits sur 36 sites marchands, dans tous les univers de consommation.',
            COMMENT6: "Le bénéficiaire a la possibilité d'échanger son Ticket Kadéos® Online contre un chèque cadeau papier Ticket Kadéos® Infini."
          }
        },
        RIGHT_SIDE: {
          ONLINE_SHOP: 'Les e-tickets Kadéos sont valables dans 36 sites marchands, dans tous les univers de consommation',
          GIFT_VOUCHER: 'Ils sont aussi échangeables contre des chèques cadeaux papier Ticket Kadeos Infini®',
          TERM_CONDITION: {
            TITLE: 'Conditions :',
            COMMENT1: "Offre non cumulable avec d'autres opérations commerciales",
            COMMENT2: 'Validité de 12 mois à compter de la date de l’envoi de l’email au bénéficiaire',
            COMMENT3: "Le Filleul ne doit pas être salarié au sein de la même société (ou d'une filiale appartenant au même groupe) que celle de son Parrain",
            COMMENT4: "L'auto-parrainage n'est pas autorisé",
            COMMENT: "L&apos;adresse email du Filleul doit être différente de celle du Parrain"
          },
          NOTE: 'A noter : Afin de vous assurer de la bonne réception de votre e-ticket par email, nous vous invitons à ajouter dès maintenant à votre carnet d&apos;adresse, l&apos;email expéditeur <a href="mailto:c.lopez@upela.com">c.lopez@upela.com</a>. Egalement, n&apos;oubliez pas de vérifier vos courriers indésirables ou spams.'
        }
      }
    });

    $translateProvider.translations('es', {
      REFERRAL: {
        SPONSORSHIP: 'Programa de',
        OPERATION: 'Patrocinio:',
        PRINCIPLE: '"Ganamos todos"',
        ACCORDING: 'según',
        GIFT: 'with gift vouchers',
        HOW_WORK: {
          TITLE: '¿Cómo funciona?',
          COMMENT: 'Hay dos opciones :',
          OPTION1: {
            TITLE: 'Opción n.° 1',
            COMMENT1: 'Invitad vuestros contactos en las redes sociales:',
            COMMENT2: '!No hay nada más sencillo, haga clic aquí y gane y 20 euros por cada recomendación!',
            FACEBOOK: 'Share on Facebook',
            LINKEDIN: 'Share on Linkedin',
            VIADEO: 'Share on Viadeo'            
          },
          OPTION2: {
            TITLE: 'Opción n.° 2',
            ADD_EMAIL: 'Añada los correos electrónicos de los contactos que desea apadrinar.',
            ADD_MESSAGE: 'Añada un mensaje personalizado',
            MESSAGE: 'Mensaje',
            SEND_INVITATION: 'Envoyer les invitations',
            COMMENT: 'Vous pouvez également envoyer le lien suivant à vos contacts via votre messagerie :'
          },
          BENEFIT: {
            TITLE: '<a href="https://www.ticketkadeosonline.fr/Presentation.aspx">Ticket Kadéos® Online</a> voucher benefits',
            COMMENT1: 'Easy and practical, the gift voucher is directly emailed to beneficiary;',
            COMMENT2: 'It allows an easy and secured purchase on the Internet, 24/7;',
            COMMENT3: 'Scored : can be spent in one purchase or divided into several purchases;',
            COMMENT4: 'Compatible with other additional means of payment;',
            COMMENT5: 'Access to thousands of items on 36 online shops covering various industries;',
            COMMENT6: 'The beneficiary is allowed to exchange his Ticket Kadéos® Online voucher with a Ticket Kadéos® Infini.paper gift voucher.'
          }
        },
        RIGHT_SIDE: {
          ONLINE_SHOP: 'Ticket Kadéos® Online voucher give access to thousands of items on 36 online shops covering various industries',
          GIFT_VOUCHER: 'They are also redeemable for Ticket Kadeos Infini® paper gift vouchers',
          TERM_CONDITION: {
            TITLE: 'Terms and conditions:',
            COMMENT1: 'Offer cannot be combined with other commercial operations',
            COMMENT2: 'Valid for 12 months from the date on which the beneficiary has been emailed',
            COMMENT3: 'The Sponsored Person must not be an employee from the same company (or any subsidiary company belonging to the same group) as his Sponsor.',
            COMMENT4: 'A sponsor cannot sponsor himself',
            COMMENT: 'The email address from the Sponsored Person must be different from the email address of his Sponsor'
          },
          NOTE: 'Please note that we invite you today to add to your address book the email address of the shipper of your Kadéos gift voucher: <a href="mailto:c.lopez@upela.com">c.lopez@upela.com</a>. Also, do not forget to check your “Junk Mail” or “Spam” folders.'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(ReferralTranslate);
})();
