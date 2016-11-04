'use strict';

/**
 * @ngdoc function
 * @name UpelaApp.controller:TopbarCtrl
 * @description
 * # TopbarCtrl
 * Controller of the UpelaApp
 */
angular.module('UpelaApp')
  .controller('TopbarCtrl', function ($scope, $cookies, Config, $translate) {
    $scope.languages = [
      {
        language: 'English',
        image: 'images/flags/1.jpg',
        short: 'en'
      },
      {
        language: 'French',
        image: 'images/flags/2.jpg',
        short: 'fr'
      },
      {
        language: 'Spanish',
        image: 'images/flags/3.jpg',
        short: 'es'
      }
    ];

    if($cookies.get(Config.Language)) {
      for(var i = 0; i < $scope.languages.length; i++) {
        if($scope.languages[i].language === $cookies.get(Config.Language)) {
          $scope.selLanguage = $scope.languages[i];
          $translate.use($scope.languages[i].short);
        }
      }
    } else {
      $scope.selLanguage = $scope.languages[0];
      $cookies.put(Config.Language, $scope.selLanguage.language);
    }

    $scope.selectLanguage = function(language) {
      $scope.selLanguage = language;
      $cookies.put(Config.Language, $scope.selLanguage.language);
      $translate.use(language.short);
    };
  });
