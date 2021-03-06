'use strict';

/**
 * @ngdoc function
 * @name yogaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yogaApp
 */
angular.module('yogaApp')
	.controller('PlaySequenceCtrl', [
		'$scope',
		'$interval',
		'api',
		'$routeParams',
	function ($scope, $interval, Api, $routeParams) {

		var timer,
			currentPose = 0;

		$scope.sequenceOver = false;

		Api.getSequence($routeParams.sequenceId, startSequence);

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
			angular.element('#change')[0].currentTime = 0;
			angular.element('#change')[0].play();

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
