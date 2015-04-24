'use strict';

angular.module('yogaApp')
	.controller('CreatePoseCtrl', [
		'$scope',
		'api',
		'$routeParams',
	function($scope, Api, $routeParams) {

		Api.getPose($routeParams.poseId, callback);

		function callback(pose) {
			$scope.pose = pose;
		}

		$scope.save = function() {
			Api.savePose($scope.pose, callback);
		};
	}]);
