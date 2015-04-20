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
			pose_length : 60,
			poses : [
				{
					name: 'Utthuta Trikonasana',
					easy_name: 'Triangle',
					time_left: 5,
				},
				{
					name: 'Utthita Parsvakonasana',
					easy_name: 'Extended Side Angle',
					time_left: 5,
				},
			],
		};

		$scope.pose = $scope.sequence.poses[currentPose];

		$interval(updatePose, 1000);

		function updatePose() {
			var left = $scope.pose.time_left;

			if(left === 0)
			{
				nextPose();
				return;
			}

			$scope.pose.time_left = $scope.pose.time_left - 1;
		};

		function nextPose() {
			var nextPose = currentPose += 1;

			if(nextPose <= $scope.sequence.poses.length)
			{
				console.log('next pose');
				$scope.pose = $scope.sequence.poses[nextPose];
				currentPose = nextPose;
			}
			else
			{
				endSequence();
			}
		};

		function endSequence() {
			console.log('end sequence');
			$scope.sequenceOver = true;
		};

	});
