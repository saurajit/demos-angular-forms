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
	var PAN_FORMAT_REGEX = /^[A-Z]{5}[0-9]{4}[A-Z]$/; //5 alphabets then 4 numbers then another alphabet
	
	$scope.example1 = {};
	
	$scope.submitExample2 = function() {
		console.log($scope.builtInValidationForm);
	};
	
	$scope.validateExample3 = function() {
		$scope.customValidationForm.pan.$setValidity('panformat', PAN_FORMAT_REGEX.test($scope.customValidationForm.pan.$modelValue));
		console.log($scope.customValidationForm);
	};
	});