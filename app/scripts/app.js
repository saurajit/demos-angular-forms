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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
