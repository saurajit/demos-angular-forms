'use strict';

/**
 * @ngdoc overview
 * @name angularFormsApp
 * @description
 * # angularFormsApp
 *
 * Main module of the application.
 */
angular
  .module('angularFormsApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/nested-forms', {
        templateUrl: 'views/nestedforms.html',
        controller: 'NestedformsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
