'use strict';

angular.module('yogaApp')
	.controller('CreateCtrl', [
		'$scope',
		'api',
	function($scope, Api) {

		$scope.searchResults = [];
		$scope.queryTerm = '';

		Api.getSequence(callback);

		function callback(sequence) {
			$scope.sequence = sequence;
		}

		$scope.addPose = function() {
		};

		$scope.search = function() {
			Api.searchPoses({ 'search': $scope.searchTerm }, function(response) {
				$scope.searchResults = response.results;
			});
		}
	}]);
