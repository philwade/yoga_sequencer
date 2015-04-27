'use strict';

angular.module('yogaApp')
	.factory('api', [
		'$http',
		function($http) {
			var baseUrl = 'http://127.0.0.1:5000/api';

			return {
				getSequences: function(successCallback) {
					$http.get(
						baseUrl + '/sequence/list'
					).success(successCallback);
				},
				getSequence: function(sequenceId, successCallback) {
					var url = '/sequence';

					if(typeof sequenceId !== 'undefined')
					{
						url += '/' + sequenceId
					}

					$http.get(
						baseUrl + url
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
				},
				saveSequence: function(sequence, successCallback) {
					$http.post(
						baseUrl + '/sequence/save',
						sequence
					).success(successCallback);
				}

			};
		}]);
