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
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
	  .when('/addpose', {
	  	templateUrl: 'views/addpose.html',
		controller: 'CreatePoseCtrl'
	  })
	  .when('/editpose/:poseId', {
	  	templateUrl: 'views/addpose.html',
		controller: 'CreatePoseCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
  });
