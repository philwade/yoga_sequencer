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
				}
			};
		}]);
