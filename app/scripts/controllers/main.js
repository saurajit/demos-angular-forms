'use strict';

/**
 * @ngdoc function
 * @name angularFormsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFormsApp
 */
angular.module('angularFormsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
