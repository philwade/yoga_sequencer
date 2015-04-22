'use strict';

angular.module('yogaApp')
	.controller('CreateCtrl', [
		'$scope',
		'api',
	function($scope, Api) {

		Api.getSequence(callback);

		function callback(sequence) {
			$scope.sequence = sequence;
		}
	}]);
