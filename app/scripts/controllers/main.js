'use strict';

/**
 * @ngdoc function
 * @name yogaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yogaApp
 */
angular.module('yogaApp')
	.controller('MainCtrl', [
		'$scope',
		'$interval',
		'api',
	function ($scope, $interval, Api) {

		var timer,
			currentPose = 0;

		$scope.sequenceOver = false;

		Api.getSequence(startSequence);

		function startSequence(sequence) {
			$scope.sequence = sequence;
			setupPose(currentPose);
			timer = $interval(updatePose, 1000);
		}

		function setupPose(poseId) {
			$scope.pose = $scope.sequence.sequencePoses[currentPose];
			$scope.time = $scope.sequence.sequencePoses[currentPose].duration || $scope.sequence.pose_length;
			currentPose = poseId;
		}

		function updatePose() {
			var left = $scope.time;

			if(left === 0)
			{
				nextPose();
				return;
			}

			$scope.time = $scope.time - 1;
		};

		function nextPose() {
			var nextPose = currentPose += 1;

			if(nextPose < $scope.sequence.sequencePoses.length)
			{
				console.log('next pose');
				setupPose(nextPose);
			}
			else
			{
				$interval.cancel(timer);
				endSequence();
			}
		};

		function endSequence() {
			console.log('end sequence');
			$scope.sequenceOver = true;
		};

	}]);
