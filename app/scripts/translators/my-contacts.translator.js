/**
 * Created by bear on 11/7/16.
 */
(function () {

  'use strict';

  function MyContactsTranslate ($translateProvider) {
    $translateProvider.translations('en', {
      MY_CONTACT: {
        TITLE: 'My contacts',
        COMMENT: 'Manage your address book',
        ALL_CONTACT: {
          TITLE: 'All the contacts',
          SEARCH: 'Search by company, name, client code',
          DELETE: 'Delete selected',
          CLIENT: 'Client Code',
          NAME: 'Name',
          COMPANY: 'Company',
          CITY: 'City',
          COUNTRY: 'Country',
          PAGE: 'Results per page',
          RESULT: 'Results'
        },
        ADD_CONTACT: {
          TITLE: 'Add a contact',
          BUSINESS: 'Business address',
          COMPANY: 'Company',
          NAME: 'Name',
          PHONE: 'Phone',
          EMAIL: 'Email',
          ADDRESS: 'Address',
          COUNTRY: 'Country',
          CITY: 'City',
          CLIENT_CODE: 'Client Code',
          NOTES: 'Notes',
          SAVE: 'Save',
          CANCEL: 'Cancel'
        },
        IMPORT_LIST: {
          TITLE: 'Import a list',
          IMPORT_SPREADSHEET: 'Import spreadsheet (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Les pays doivent être renseignés au format ',
          COMMENT2: 'Les numéros de téléphone doivent être au format international,',
          COMMENT3: 'ex: +336XXXXXXXX pour un portable Français',
          COMMENT4: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format excel',
          COMMENT5: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format csv ou txt',
          IMPORT: 'Import',
          CANCEL: 'Cancel'
        }
      }
    });

    $translateProvider.translations('fr', {
      MY_CONTACT: {
        TITLE: 'Mes contacts',
        COMMENT: 'Gestion de votre carnet d\'adresse',
        ALL_CONTACT: {
          TITLE: 'Tous les contacts',
          SEARCH: 'Rechercher par société, nom, ville, code client...',
          DELETE: 'Supprimer la sélection',
          CLIENT: 'Code Client',
          NAME: 'Nom',
          COMPANY: 'Société',
          CITY: 'Ville',
          COUNTRY: 'Pays',
          PAGE: 'Résultats par page',
          RESULT: 'Résultats'
        },
        ADD_CONTACT: {
          TITLE: 'Ajouter un contact',
          BUSINESS: 'Adresse commerciale',
          COMPANY: 'Société',
          NAME: 'Nom',
          PHONE: 'Téléphone',
          EMAIL: 'Email',
          ADDRESS: 'Adresse',
          COUNTRY: 'Pays',
          CITY: 'Ville',
          CLIENT_CODE: 'Code Client',
          NOTES: 'Notes',
          SAVE: 'Enregistrer',
          CANCEL: 'Annuler'
        },
        IMPORT_LIST: {
          TITLE: 'Importer liste',
          IMPORT_SPREADSHEET: 'Import fichier (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Les pays doivent être renseignés au format ',
          COMMENT2: 'Les numéros de téléphone doivent être au format international,',
          COMMENT3: 'ex: +336XXXXXXXX pour un portable Français',
          COMMENT4: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format excel',
          COMMENT5: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format csv ou txt',
          IMPORT: 'Importer',
          CANCEL: 'Annuler'
        }
      }
    });

    $translateProvider.translations('es', {
      MY_CONTACT: {
        TITLE: 'Mis contactos',
        COMMENT: 'Gestión de su agenda',
        ALL_CONTACT: {
          TITLE: 'Todos los contactos',
          SEARCH: 'Buscar por empresa, nombre, ciudad, código de cliente...',
          DELETE: 'Eliminar seleccionados',
          CLIENT: 'Código de cliente',
          NAME: 'Nombre',
          COMPANY: 'Empresa',
          CITY: 'Ciudad',
          COUNTRY: 'País',
          PAGE: 'Resultados por página ',
          RESULT: 'Resultados'
        },
        ADD_CONTACT: {
          TITLE: 'Añadir un contacto',
          BUSINESS: 'Dirección de la empresa',
          COMPANY: 'Empresa',
          NAME: 'Nombre',
          PHONE: 'Teléfono',
          EMAIL: 'Correo electrónico',
          ADDRESS: 'Dirección',
          COUNTRY: 'País',
          CITY: 'Ciudad',
          CLIENT_CODE: 'Código de cliente',
          NOTES: 'Notas',
          SAVE: 'Registrar',
          CANCEL: 'Cancelar'
        },
        IMPORT_LIST: {
          TITLE: 'Importar lista',
          IMPORT_SPREADSHEET: 'Importar archivo (xls, xlsx, csv, txt)',
          NO_FILE: 'No file chosen',
          COMMENT1: 'Les pays doivent être renseignés au format ',
          COMMENT2: 'Les numéros de téléphone doivent être au format international,',
          COMMENT3: 'ex: +336XXXXXXXX pour un portable Français',
          COMMENT4: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format excel',
          COMMENT5: 'Cliquez ici pour télécharger un exemple de tableau de contacts au format csv ou txt',
          IMPORT: 'Importar',
          CANCEL: 'Cancelar'
        }
      }
    });
  }

  angular.module('UpelaApp')
    .config(MyContactsTranslate);
})();
