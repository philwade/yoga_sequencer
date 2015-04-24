'use strict';

angular.module('yogaApp')
	.factory('api', [
		'$http',
		function($http) {
			var baseUrl = 'http://127.0.0.1:5000/api';

			return {
				getSequence: function(successCallback) {
					$http.get(
						baseUrl + '/sequence'
					).success(successCallback);
				},
				getPose: function(poseId, successCallback) {

					var url = '/pose';

					if(typeof poseId !== 'undefined')
					{
						url += '/' + poseId;
					}
					$http.get(
						baseUrl + url
					).success(successCallback);
				},
				savePose: function(pose, successCallback) {
					$http.post(
						baseUrl + '/pose',
						pose
					).success(successCallback);
				},
				searchPoses: function(searchTerm, successCallback) {
					$http.post(
						baseUrl + '/pose/search',
						searchTerm
					).success(successCallback);
				}

			};
		}]);
