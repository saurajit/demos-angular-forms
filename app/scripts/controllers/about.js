'use strict';

/**
 * @ngdoc function
 * @name angularFormsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularFormsApp
 */
angular.module('angularFormsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
