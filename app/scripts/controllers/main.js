'use strict';

/**
 * @ngdoc function
 * @name yogaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yogaApp
 */
angular.module('yogaApp')
	.controller('MainCtrl', function ($scope, $interval) {

		var currentPose = 0;

		$scope.sequenceOver = false;

		$scope.sequence = {
			poses : [
				{
					name: 'Utthita Trikonasana',
					easy_name: 'Triangle',
					time: 5,
				},
				{
					name: 'Utthita Parsvakonasana',
					easy_name: 'Extended Side Angle',
					time: 5,
				},
			],
		};

		setupPose(currentPose);

		var timer = $interval(updatePose, 1000);

		function setupPose(poseId) {
			$scope.pose = $scope.sequence.poses[currentPose];
			$scope.time = $scope.sequence.poses[currentPose].time || $scope.sequence.pose_length;
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

			if(nextPose < $scope.sequence.poses.length)
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

	});
