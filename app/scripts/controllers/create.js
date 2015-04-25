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

		$scope.addPose = function(pose) {
			var newSequencePose = {
				pose: pose,
				duration: 60,
				ordinality: $scope.sequence.sequencePoses.length,
			}
			$scope.sequence.sequencePoses.push(newSequencePose);
		};

		$scope.search = function() {
			if($scope.searchTerm.length > 2)
			{
				Api.searchPoses({ 'search': $scope.searchTerm }, function(response) {
					$scope.searchResults = response.results;
				});
			}
			else
			{
				$scope.searchResults = [];
			}
		};

		$scope.saveSequence = function() {
			Api.saveSequence({ 'sequence': $scope.sequence }, function(response) {
				$scope.sequence = response;
			});
		};
	}]);
