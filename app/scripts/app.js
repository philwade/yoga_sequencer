'use strict';

/**
 * @ngdoc overview
 * @name yogaApp
 * @description
 * # yogaApp
 *
 * Main module of the application.
 */
angular
.module('yogaApp', [
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch',
])
.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
		})
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
		})
		.when('/sequence/play/:sequenceId', {
			templateUrl: 'views/playsequence.html',
			controller: 'PlaySequenceCtrl'
		})
		.when('/sequence/list', {
			templateUrl: 'views/listsequence.html',
			controller: 'ListSequencesCtrl'
		})
		.when('/sequence/edit/:sequenceId', {
			templateUrl: 'views/createsequence.html',
			controller: 'CreateSequenceCtrl'
		})
		.when('/sequence/create', {
			templateUrl: 'views/createsequence.html',
			controller: 'CreateSequenceCtrl'
		})
		.when('/pose/add', {
			templateUrl: 'views/addpose.html',
			controller: 'CreatePoseCtrl'
		})
		.when('/pose/edit/:poseId', {
			templateUrl: 'views/addpose.html',
			controller: 'CreatePoseCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
