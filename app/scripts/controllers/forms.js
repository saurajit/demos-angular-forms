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
	$scope.example1 = {};
	
	$scope.submitExample2 = function() {
		console.log($scope.builtInValidationForm);
	};
	});