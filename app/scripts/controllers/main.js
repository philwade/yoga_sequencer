'use strict';

/**
 * @ngdoc function
 * @name yogaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yogaApp
 */
angular.module('yogaApp')
	.controller('MainCtrl', function ($scope) {
		$scope.sequence = {
			pose_length : 6000,
			poses : [
				{
					'name': 'Utthuta Trikonasana',
					'easy_name': 'Triangle',
				},
			],
		};
	});
