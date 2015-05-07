'use strict';

angular.module('yogaApp')
	.controller('CreateSequenceCtrl', [
		'$scope',
		'api',
		'$routeParams',
	function($scope, Api, $routeParams) {

		$scope.searchResults = [];
		$scope.queryTerm = '';
		var toRemove = [];


		var reOrderPoses = function() {
			for(var i = 0; i < $scope.sequence.sequencePoses.length; i++)
			{
				$scope.sequence.sequencePoses[i].ordinality = i;
			}
		};

		var calculateTotalTime = function() {
			var total = 0;
			for(var i = 0; i < $scope.sequence.sequencePoses.length; i++)
			{
				total += $scope.sequence.sequencePoses[i].duration;
			}

			$scope.totalTime = total;
		};

		$scope.calculateTotalTime = calculateTotalTime;

		var callback = function(sequence) {
			$scope.sequence = sequence;
			calculateTotalTime();
		};


		Api.getSequence($routeParams.sequenceId, callback);

		$scope.addPose = function(pose) {
			var newSequencePose = {
				pose: pose,
				duration: $scope.sequence.default_duration,
				ordinality: $scope.sequence.sequencePoses.length,
			}
			$scope.sequence.sequencePoses.push(newSequencePose);
			calculateTotalTime();
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
			Api.saveSequence({ 'sequence': $scope.sequence, 'toRemove': toRemove }, function(response) {
				$scope.sequence = response;
				toRemove = [];
			});
		};

		$scope.removePose = function(sequencePose) {
			var sequencePoseIndex = $scope.sequence.sequencePoses.indexOf(sequencePose);
			var poseToRemove = $scope.sequence.sequencePoses[sequencePoseIndex];

			if(typeof poseToRemove.id !== 'undefined')
			{
				toRemove.push(poseToRemove.id);
			}

			$scope.sequence.sequencePoses.splice(sequencePoseIndex, 1);
			reOrderPoses();
			calculateTotalTime();
		};

		$scope.dragCallbacks = {
			dropped: function(event) {
				reOrderPoses();
				console.log($scope.sequence);
			}
		};

	}]);
