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
		.when('/sequence/list', {
			templateUrl: 'views/sequencelist.html',
			controller: 'ListSequencesCtrl'
		})
      .when('/sequence/edit/:sequenceId', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/sequence/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
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
