'use strict';

/**
 * @ngdoc function
 * @name angularFormsApp.controller:FormsCtrl
 * @description
 * # FormsCtrl
 * Controller of the angularFormsApp
 */
angular.module('angularFormsApp')
  .controller('FormsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });