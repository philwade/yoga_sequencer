'use strict';

angular.module('yogaApp')
	.controller('ListSequencesCtrl', [
		'$scope',
		'api',
		'$location',
	function($scope, Api, $location) {

		$scope.$location = $location;

		Api.getSequences(callback);

		function callback(sequences) {
			$scope.sequences = sequences.sequences;
		}
	}]);
