/**
 * Created by bear on 11/15/16.
 */
(function () {

  'use strict';

  function MyStoreTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      MY_STORE: {
        TITLE: 'My stores',
        COMMENT1: 'You are an online merchant and are looking for the best way to centralize the shipments from all of your eShops?',
        COMMENT2: 'With the option "My stores", it is now possible!',
        COMMENT3: 'Our <strong>Ecommerce connectors</strong> give you the ultimate solution for grouping together all the orders from any platform such as ',
        COMMENT4: 'You can then <strong>manage your online sales</strong> directly on your Upela Business Account.',
        COMMENT5: ', etc.',
        ALL_SHOPS: {
          TITLE: 'Discover our connectors along with their Setup Guides and centralize your shipments from all your shops',
          PRESTASHOP: 'Prestashop shipping module',
          MAGENTO: 'Magento shipping module',
          WOOCOMMERCE: 'WooCommerce shipping module',
          AMAZON: 'Amazon shipping module',
          EBAY: 'eBay shipping module',
          CDISCOUNT: 'Cdiscount shipping module',
          PRICEMINISTER: 'Priceminister shipping module',
          SHOPIFY: 'Shopify shipping module',
          OSCOMMERCE: 'osCommerce shipping module',
          PHP: 'PHP shipping module',
          DOT_NET: '.Net shipping module',
          PYTHON: 'Python shipping module',
          RENTASHOP: 'Rentashop shipping module',
          EXCEL: 'Shipping with excel file solution',
          CSV: 'Shippingwith txt or csv file solution',
          MIRAKL: 'Mirakl shipping module'
        },
        WHY_INSTALL: {
          TITLE: 'Why install our shipping module?',
          COMMENT1: 'With our API, you can offer our express shipping services to your customers directly through your e-commerce site.',
          COMMENT2: 'Our transport offers are integrated into your site and your customers can select the offer that best suits their need.',
          COMMENT3: 'This module entitles you to unbeatable rates for the services provided by ',
          COMMENT4: 'Take advantage of reductions of up to -70% on your express national and international shipments.',
          COMMENT5: 'Using our API, you get the benefit of all the Upela services and a specific professional customer service to accompany you in the management of your shipments.'
        },
        QUESTIONS: {
          TITLE: 'Frequently Asked Questions about e-commerce connectors',
          ONE: {
            TITLE: 'How do I ship my products via my UPELA account?',
            COMMENT1: '<strong>Shipping orders are placed manually.</strong>',
            COMMENT2: 'This is in your control.',
            COMMENT3: 'Once you are logged in to your UPELA account, click the « My stores » tab, then the « My orders » tab and, finally, download all the orders placed via your eShop to UPELA.',
            COMMENT4: 'If you wish to view the orders details prior to sending them, click « View » and check the data (date of the command, items detail, shipping address, shipping method and weight of the parcel(s)).',
            COMMENT5: '<strong>Ship your orders by clicking the « Ship » button. Following this, the shipping labels will be automatically generated.</strong>',
            COMMENT6: 'We remind you that the labels must be printed out and attached to the parcel(s).'
          },
          TWO: {
            TITLE: 'What is automated on my UPELA account?',
            COMMENT1: 'When adding your eShop to UPELA, <strong>the information about your online shop are automatically downloaded.</strong> By default the address of your store is set as your shipping address.',
            COMMENT2: 'Once added, click the « My orders » tab and download the orders from your online store / marketplace to UPELA.',
            COMMENT3: '<strong>The import of all your orders into your customer area is automatic.</strong>',
            COMMENT4: 'Our transport solution for e-merchants allows you to centralize all your orders in a single place: your UPELA customer area.',
            COMMENT5: '<strong>The update of the purchase orders in UPELA and in your online shop/marketplace</strong> (status updates: awaiting payment - payment accepted - in the course of delivery – delivered; delivery information and other details) <strong>is also automatic.</strong>',
            COMMENT6: 'Once shipped, <strong>the end customer will receive an automatic email</strong> notifying him about the <strong>ongoing shipment</strong> and the <strong>tracking number</strong> of his parcel.'
          },
          THREE: {
            TITLE: 'How can I modify the shipping address?',
            COMMENT1: 'The shipping address is automatically pre-filled in your UPELA customer area.',
            COMMENT2: 'Please note that the address of your store will be used by default as the shipping address of all your orders placed via this eShop.',
            COMMENT3: 'You can modify the shipping address for each shipping order before the shipping labels are generated by selecting another address in your address book.'
          },
          FOUR: {
            TITLE: 'How can I modify the delivery address?',
            COMMENT: 'You can complete or edit the delivery address by clicking the « Edit » button only before the shipping label is generated.'
          },
          FIVE: {
            TITLE: 'How to configure the transport prices of my eShop?',
            COMMENT1: 'Setting the prices can differ depending on the platform.',
            COMMENT2: 'For <strong>platforms</strong> such as Prestashop, Magento, Woocommerce and Oscommerce, you must in the first instance create a new courier in your eShop.',
            COMMENT3: 'You select all the information that you would like to see displayed on your eShop:',
            COMMENT4: '- Express delivery (1 – 2 business day(s))',
            COMMENT5: '- Standard delivery (3 – 4 business days)',
            COMMENT6: 'You then choose the <strong>billing method</strong> for your customers:',
            COMMENT7: '- You fix the <strong>price range according to the customer’s shopping cart.</strong>',
            COMMENT8: 'For instance, you can offer the shipping costs for any order above €100.',
            COMMENT9: '- Or you can select a <strong>price range depending on the weight.</strong>',
            COMMENT10: 'We can provide you with a <strong>fee schedule</strong> based on the weight and destination of your shipment to make your task even easier.',
            COMMENT11: '<strong>For marketplaces</strong> (Amazon, eBay, Cdiscount), setting the transport prices is different: <strong>the price is determined by the item and delivery method.</strong>',
            COMMENT12: 'So you select the price of an item depending on the delivery method proposed by the marketplace, that is depending on the <strong>speed of delivery</strong>: standard delivery (2 business days) or express delivery (1 business day).'
          },
          SIX: {
            TITLE: 'Is the end customer notified of the sending?',
            COMMENT: 'Yes, <strong>the end customer will receive an email notification from UPELA</strong> and from the marketplace/eShop in order to confirm to him that his parcel has been shipped.'
          },
          SEVEN: {
            TITLE: 'Can the end customer select the Pick-up & Go location of delivery?',
            COMMENT1: 'Unfortunately, our connector does not give the end customer the possibility to choose the Pick-up & Go location of delivery.',
            COMMENT2: 'This location can be modified only via your UPELA account once the end customer finalized his order on the marketplace/eShop.',
            COMMENT3: 'Nevertheless, <strong>the end customer will receive a confirmation email afterwards containing the Pick-up & Go location address.</strong>'
          },
          EIGHT: {
            TITLE: 'Does the end customer receive the tracking number?',
            COMMENT1: 'Yes, <strong>the tracking number is emailed to the end customer</strong> once you click on the « Ship » button.',
            COMMENT2: 'This will allow him to track his parcel on the carrier’s website.'
          },
          NINE: {
            TITLE: 'How many carriers can be proposed on my eShop?',
            COMMENT1: 'Once our ecommerce module is installed on your eShop, <strong>you can select several carriers</strong> and choose those who will be displayed on your eShop.',
            COMMENT2: 'You can also modify them at any time.',
            COMMENT3: 'This option is not available for marketplaces.'
          },
          TEN: {
            TITLE: 'How to cancel the orders placed via my eShop?',
            COMMENT1: 'You have the control over the cancellation of any order.',
            COMMENT2: 'Log into your UPELA account and click on the « cancel » link corresponding to the order you wish to cancel.',
            COMMENT3: 'You can also contact our Customer Service directly by phone at +33(0)1 78 76 79 79.'
          }
        }
      }
    });

    $translateProvider.translations('fr', {
      MY_STORE: {
        TITLE: 'Mes boutiques',
        COMMENT1: 'Vous êtes un e-commerçant et vous aimeriez centraliser les envois de toutes vos boutiques e-commerce ?',
        COMMENT2: 'Avec l’option « Mes boutiques », cela est désormais possible !',
        COMMENT3: 'Nos <strong>connecteurs e-commerce</strong> vous permettent de regrouper les commandes de toutes vos plateformes de vente telles qu’',
        COMMENT4: 'Vous pouvez ainsi <strong>gérer l’ensemble de vos ventes e-commerce</strong> directement depuis votre compte PRO Upela.',
        COMMENT5: ', etc.',
        ALL_SHOPS: {
          TITLE: 'Découvrez nos connecteurs avec leur guide d’installation et centralisez les envois de toutes vos boutiques',
          PRESTASHOP: 'Module de transport Prestashop',
          MAGENTO: 'Module de transport Magento',
          WOOCOMMERCE: 'Module de transport WooCommerce',
          AMAZON: 'Module de transport Amazon',
          EBAY: 'Module de transport eBay',
          CDISCOUNT: 'Module de transport Cdiscount',
          PRICEMINISTER: 'Module de transport Priceminister',
          SHOPIFY: 'Module de transport Shopify',
          OSCOMMERCE: 'Module de transport osCommerce',
          PHP: 'Module de transport PHP',
          DOT_NET: 'Module de transport .NET',
          PYTHON: 'Module de transport Python',
          RENTASHOP: 'Solution e-commerce Rentashop',
          EXCEL: "Solution d'envoi par fichier Excel",
          CSV: "Solution d'envoi par fichier txt ou csv",
          MIRAKL: 'Solution e-commerce Mirakl'
        },
        WHY_INSTALL: {
          TITLE: 'Why install our shipping module?',
          COMMENT1: 'With our API, you can offer our express shipping services to your customers directly through your e-commerce site.',
          COMMENT2: 'Our transport offers are integrated into your site and your customers can select the offer that best suits their need.',
          COMMENT3: 'This module entitles you to unbeatable rates for the services provided by ',
          COMMENT4: 'Take advantage of reductions of up to -70% on your express national and international shipments.',
          COMMENT5: 'Using our API, you get the benefit of all the Upela services and a specific professional customer service to accompany you in the management of your shipments.'
        },
        QUESTIONS: {
          TITLE: 'Questions les plus fréquentes sur les connecteurs e-commerce',
          ONE: {
            TITLE: 'Comment expédier mes commandes via mon espace client UPELA ?',
            COMMENT1: '<strong>L’envoi des commandes s’effectue manuellement.</strong>',
            COMMENT2: 'Vous avez la main sur leur gestion.',
            COMMENT3: 'Une fois connecté sur votre espace client UPELA, cliquez sur l’onglet « mes boutiques » puis « mes commandes » et téléchargez les commandes de votre e-boutique dans UPELA.',
            COMMENT4: 'Si vous souhaitez visualiser le détail des commandes avant de les envoyer, cliquez sur « voir » et vérifiez les données (date de la commande, détail des articles, adresse d’expédition, mode de livraison et poids du colis).',
            COMMENT5: '<strong>Expédiez vos commandes en cliquant sur « envoyer ». Les bons de transports se génèreront automatiquement après avoir cliqué sur « envoyer ».</strong>',
            COMMENT6: 'Nous vous rappelons que les bordereaux doivent être imprimés puis collés sur les colis.'
          },
          TWO: {
            TITLE: 'Qu’est ce qui est automatisé dans mon espace client UPELA ?',
            COMMENT1: 'Au moment de l’ajout de votre boutique dans UPELA, <strong>les informations de votre boutique se téléchargent automatiquement.</strong> Par défaut c’est l’adresse de votre boutique qui sera retenue comme adresse d’expédition.',
            COMMENT2: 'Une fois ajoutée, cliquez sur le bouton « mes commandes » et téléchargez les commandes de votre e-boutique / marketplace dans UPELA. ',
            COMMENT3: '<strong>L’importation de toutes les commandes vers votre espace client est automatique.</strong>',
            COMMENT4: 'Notre solution de transport e-commerce vous permet de centraliser toutes vos commandes dans un seul et unique endroit : votre espace client UPELA.',
            COMMENT5: '<strong>La mise à jour des commandes dans UPELA et sur votre e-boutique/marketplace</strong> (actualisation des différents statuts : en attente de paiement - paiement accepté- en cours de livraison – livré ; information relative à la livraison et autres détails) <strong>est aussi automatique.</strong>',
            COMMENT6: 'La commande une fois expédiée, <strong>le client final reçoit automatiquement un mail</strong> lui notifiant de l’ <strong>expédition en cours</strong> et lui indiquant le <strong>numéro de suivi</strong> de son colis.'
          },
          THREE: {
            TITLE: "Comment puis-je changer l'adresse d'expédition ?",
            COMMENT1: 'L’adresse d’expédition est automatiquement pré-remplie dans votre espace client UPELA.',
            COMMENT2: 'Notez que l’adresse de votre boutique sera utilisée comme adresse d’expédition par défaut pour toutes vos commandes de cette boutique.',
            COMMENT3: 'Vous avez la possibilité de modifier l’adresse d’expédition pour chaque commande à envoyer en sélectionnant une autre adresse dans votre carnet d’adresse, avant de générer le bordereau de transport.'
          },
          FOUR: {
            TITLE: "Comment puis-je changer l'adresse de destination ?",
            COMMENT: 'Vous pouvez compléter ou modifier l’adresse de destination de la commande en cliquant sur le lien « modifier », avant de générer le bordereau de transport.'
          },
          FIVE: {
            TITLE: 'Comment configurer les prix de transport de ma boutique ?',
            COMMENT1: 'Le paramétrage des prix de transport est différent en fonction de votre plateforme.',
            COMMENT2: 'Pour les <strong>plateformes</strong> types Prestashop, Magento, Woocommerce et Oscommerce, vous devez dans un premier temps créer un nouveau transporteur dans votre e-boutique.',
            COMMENT3: 'Vous choisissez les informations que vous souhaitez voir apparaître sur votre site :',
            COMMENT4: '- Livraison express (J+1 ou J+2)',
            COMMENT5: '- Livraison standard (J+3 ou J +4)',
            COMMENT6: 'Puis vous choisissez le <strong>mode de facturation</strong> de votre client :',
            COMMENT7: '- vous fixez une <strong>échelle de prix en fonction du panier total du client.</strong>',
            COMMENT8: 'Par exemple, au-delà de 100€ de commande, vous pouvez choisir d’offrir les frais de port à votre client',
            COMMENT9: '- Ou bien vous pouvez choisir une <strong>échelle en termes de poids</strong>',
            COMMENT10: 'Afin de vous faciliter la tâche, nous pouvons vous fournir une <strong>grille tarifaire</strong> qui vous propose des tarifs de transports vers vos différentes adresses de destination en fonction d’une échelle de différents poids.',
            COMMENT11: '<strong>Pour les marketplace</strong> (Amazon, eBay, Cdiscount), le choix du prix des transports se fait différemment : <strong>le prix est fixé par article et par mode de livraison.</strong>',
            COMMENT12: 'Vous choisissez donc les prix des articles en fonction du mode de livraison proposé par la marketplace, c’est-à-dire en fonction de la <strong>rapidité du délai de livraison</strong> : livraison standard (J+2) ou livraison express (J+1).'
          },
          SIX: {
            TITLE: "Le client final est-il notifié de l'envoi ?",
            COMMENT: 'Oui, <strong>le client final reçoit une notification par mail de la part d’UPELA</strong> et de la marketplace /e-boutique pour lui confirmer que son colis a bien été expédié.'
          },
          SEVEN: {
            TITLE: 'Le client final peut-il choisir le point relais de livraison ?',
            COMMENT1: "Le connecteur n'intègre pas la possibilité au client final de choisir son point relais, car la sélection de l'offre se fait via votre compte Upela,",
            COMMENT2: 'après finalisation de la commande du consommateur sur la marketplace /e-boutique.',
            COMMENT3: "Toutefois, <strong>l'adresse du point relais sera communiquée au client final dans l'email de confirmation.</strong>"
          },
          EIGHT: {
            TITLE: 'Le client final reçoit-il le numéro de tracking ?',
            COMMENT1: 'Oui, <strong>le client final reçoit par mail le numéro de suivi de l’expédition</strong> qui lui permettra de faire le suivi de son colis sur le site internet du transporteur,',
            COMMENT2: 'une fois que vous avez cliqué sur le bouton « envoyer » de la commande.'
          },
          NINE: {
            TITLE: 'Combien de transporteurs peuvent-être proposés sur mon site e-commerce ?',
            COMMENT1: 'En installant le module type plateforme e-boutique, <strong>vous pouvez sélectionner plusieurs transporteurs</strong> et choisir ceux qui s’afficheront sur votre site e-commerce.',
            COMMENT2: '',
            COMMENT3: 'Vous pouvez également les modifier à tout moment.'
          },
          TEN: {
            TITLE: 'Comment annuler les commandes passées sur mon e-boutique ?',
            COMMENT1: 'Vous avez la main sur l’annulation de la commande.',
            COMMENT2: 'Connectez-vous dans votre espace client UPELA et cliquer sur le lien « annuler » de la commande dont vous souhaitez effectuer l’annulation.',
            COMMENT3: 'Vous pouvez également contacter directement notre Service Clientèle au 01 78 76 79 79.'
          }
        }
      }
    });

    $translateProvider.translations('es', {
      MY_STORE: {
        TITLE: 'Mis tiendas',
        COMMENT1: '¿Es usted un profesional del e-commerce y le gustaría centralizar los envíos de todas sus tiendas e-commerce ?',
        COMMENT2: 'Con la opción "mis tiendas", ahora ya es posible!',
        COMMENT3: 'Nuestros <strong>conectores e-commerce</strong> le permiten reagrupar los pedidos de todas las plataformas de venta como por ejemplo ',
        COMMENT4: 'Así usted puede <strong>gestionar el conjunto de sus ventas e-commerce</strong> directamente desde du cuenta profesional Upela.',
        COMMENT5: ', etc.',
        ALL_SHOPS: {
          TITLE: 'Descubra nuestros conectores con la guía del usuario y centralice los envíos de sus tiendas online',
          PRESTASHOP: 'Módulo de transporte Prestashop',
          MAGENTO: 'Módulo de transporte Magento',
          WOOCOMMERCE: 'Módulo de transporte WooCommerce',
          AMAZON: 'Módulo de transporte Amazon',
          EBAY: 'Módulo de transporte eBay',
          CDISCOUNT: 'Módulo de transporte Cdiscount',
          PRICEMINISTER: 'Módulo de transporte Priceminister',
          SHOPIFY: 'Módulo de transporte Shopify',
          OSCOMMERCE: 'Módulo de transporte osCommerce',
          PHP: 'Módulo de transporte PHP',
          DOT_NET: 'Módulo de transporte .NET',
          PYTHON: 'Módulo de transporte Python',
          RENTASHOP: 'Módulo de transporte Rentashop',
          EXCEL: 'Envio por importación de fichero excel',
          CSV: 'Envio por importación de fichero csv txt',
          MIRAKL: 'Módulo de transporte Mirakl'
        },
        WHY_INSTALL: {
          TITLE: '¿Para qué instalar nuestro módulo de transporte?',
          COMMENT1: 'Gracias a nuestra API, ahora puede ofrecer nuestros servicios de transporte exprés a sus clientes directamente desde su sitio e-commerce.',
          COMMENT2: 'Nuestras ofertas de transporte están integradas a su sitio y sus clientes pueden seleccionar la oferta que mejor se adapte a sus necesidades.',
          COMMENT3: 'Este módulo da acceso a unas tarifas insuperables en las prestaciones de los transportistas ',
          COMMENT4: 'Aproveche los descuentos hasta un -70 % en sus expediciones exprés nacionales e internacionales.',
          COMMENT5: 'Utilizando nuestra API, disfrutará de todos los servicios Upela y de un servicio profesional específico que le acompañará en la gestión de sus expediciones.'
        },
        QUESTIONS: {
          TITLE: 'Preguntas frecuentes sobre los conectores e-commerce',
          ONE: {
            TITLE: '¿Cómo enviar mis pedidos a través de mi cuenta cliente UPELA?',
            COMMENT1: 'El envío de los pedidos no se realiza de manera automática.',
            COMMENT2: 'Es usted quien administra y gestiona los pedidos.',
            COMMENT3: 'Una vez conectado a su cuenta cliente UPELA, haga clic en el botón « mis tiendas » luego en « mis pedidos » y descargue los pedidos de su tienda online en la cuenta UPELA.',
            COMMENT4: 'Si usted desea visualizar el detalle de los pedidos antes de enviarlos, haga clic en « ver » y verifique los datos (fecha del pedido, detalle del artículo, dirección de origen, modalidad de envío y peso del paquete).',
            COMMENT5: '<strong>Envíe sus pedidos haciendo clic en el botón “enviar”. Las guías de transporte se generaran de manera automática después de que haya hecho clic en “enviar”.</strong>',
            COMMENT6: 'Le recordamos que las guías deben de ser impresas y pegadas en los paquetes.'
          },
          TWO: {
            TITLE: '¿Cuáles son las acciones automáticas en mi cuenta cliente UPELA?',
            COMMENT1: 'Cuando usted añade su tienda online en la cuenta UPELA, <strong>las informaciones de su tienda se descargaran de manera automática.</strong>Por defecto, la dirección de su tienda será registrada como dirección de origen del envío.',
            COMMENT2: 'Una vez la tienda añadida, haga clic en el botón « mis pedidos » y descargue los pedidos de su tienda online / Marketplace en la cuenta UPELA.',
            COMMENT3: '<strong>La importación de todos los pedidos hacia su cuenta cliente UPELA es automática.</strong>',
            COMMENT4: 'Nuestra solución de transporte e-commerce le permite centralizar todos sus pedidos en un único y mismo lugar: la cuenta cliente UPELA.',
            COMMENT5: '<strong>La actualización de los pedidos en la cuenta UPELA y en su tienda online / Marketplace</strong> (actualización de los diferentes estados de envío: pago pendiente – pago aceptado – entrega en marcha – entregado; información relativa y otros detalles) <strong>es a su vez automática.</strong>',
            COMMENT6: 'Una vez el pedido enviado, <strong>el cliente final recibe de manera automática un mail</strong> informándole del <strong>envío en marcha</strong> y del <strong>número de seguimiento</strong> de su paquete.'
          },
          THREE: {
            TITLE: '¿Cómo podría cambiar la dirección de origen del envío?',
            COMMENT1: 'La dirección de origen es automáticamente definida en su cuenta cliente UPELA.',
            COMMENT2: 'La dirección de su tienda será utilizada por defecto como dirección de origen para todos los pedidos de esta tienda.',
            COMMENT3: 'Usted tiene la posibilidad de modificar la dirección de origen para cada pedido seleccionando otra dirección dentro de su libreta de contactos, antes de generar la guía de transporte.'
          },
          FOUR: {
            TITLE: '¿Cómo podría cambiar la dirección de destino?',
            COMMENT: 'Usted puede completar o modificar la dirección de destino del pedido haciendo clic en « modificar », antes de generar la guía de transporte.'
          },
          FIVE: {
            TITLE: '¿Cómo configurar los precios del transporte en mi tienda?',
            COMMENT1: 'El ajuste de los precios de transporte es diferente en función de <strong>su plataforma.</strong>',
            COMMENT2: 'Para las plataformas como Prestashop, Magento, Woocommerce y Oscommerce, usted debe primero crear un nuevo transportista en su tienda online.',
            COMMENT3: 'Elija las informaciones que desea ver aparecer en su página web: ',
            COMMENT4: '- exprés (24 horas o 48 horas) ',
            COMMENT5: '- estándar ( 3 o 4 días) ',
            COMMENT6: 'Luego, elija el <strong>modo de facturación</strong> de su cliente: ',
            COMMENT7: '- usted fija una <strong>gama de precios en función del importe total de la cesta de la compra del cliente.</strong>',
            COMMENT8: 'Por ejemplo, por encima de 100€ de pedidos, usted puede elegir ofrecer los costes de transporte a su cliente.',
            COMMENT9: '- O bien usted puede elegir una escala de peso.',
            COMMENT10: 'Con el fin de facilitarle la tarea, le podemos proporcionar una gama de tarifas que le indica los precios de transportes para diferentes destinos en función de una escala de diferentes pesos.',
            COMMENT11: '<strong>Para las marketplaces</strong> (Amazon, eBay, Cdiscount), se elige de otra manera el coste del transporte: el <strong>precio se fija por artículo y por modalidad de entrega.</strong>',
            COMMENT12: 'Entonces, usted elije los precios de los artículos en función del modo de entrega propuesto por la Marketplace, es decir, en función de la <strong>rapidez del plazo de entrega</strong>: entrega estándar (48 horas) o entrega exprés (24 horas).'
          },
          SIX: {
            TITLE: '¿Recibe el cliente una notificación del envío?',
            COMMENT: 'Sí, <strong>el cliente final recibe una notificación por mail por parte de UPELA</strong> y de la Marketplace / tienda online, confirmándole el hecho de que el paquete ha sido enviado.'
          },
          SEVEN: {
            TITLE: '¿Puede elegir el cliente final el punto de entrega?',
            COMMENT1: 'No. El conector no da la posibilidad al cliente final de elegir el punto de entrega porque la selección de la oferta se hace vía su cuenta cliente Upela,',
            COMMENT2: 'después de haber finalizado el pedido del consumidor en la Marketplace / tienda online.',
            COMMENT3: 'No obstante, la <strong>dirección del punto de entrega se comunicara al cliente final en el email de confirmación.</strong>'
          },
          EIGHT: {
            TITLE: '¿Recibe el cliente final el número de seguimiento del envío?',
            COMMENT1: 'Sí, <strong>el cliente final recibe por mail el número de seguimiento de su envío,</strong> que le permitirá hacer el seguimiento de su paquete en la página web del transportista,',
            COMMENT2: 'una vez usted haya hecho clic en el botón « enviar » el pedido.'
          },
          NINE: {
            TITLE: '¿Cuantos transportistas pueden ser propuestos en mi tienda e-commerce?',
            COMMENT1: 'Instalando el modulo « plataforma tienda online », <strong>usted puede seleccionar varios transportistas</strong> y elegir los que quiera que aparezcan en la página web de su tienda online.',
            COMMENT2: '',
            COMMENT3: 'A su vez, usted puede modificarles cuando quiera.'
          },
          TEN: {
            TITLE: '¿Cómo cancelar los pedidos realizados en mi tienda online?',
            COMMENT1: '<strong>Usted puede cancelar un pedido,</strong> para ello tiene que conectarse a su cuenta cliente UPELA y hacer clic en “cancelar”.',
            COMMENT2: '',
            COMMENT3: 'También, si prefiere puede ponerse en contacto con nuestro servicio cliente llamando al 0033 (0)1 78 76 79 79.'
          }
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(MyStoreTranslate);
})();
