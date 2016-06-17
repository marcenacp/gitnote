'use strict';

angular
  .module('gitnote', [
    'gitnote.tokenAuthentication',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login_essai', {
        templateUrl: '',
      })
      .otherwise('/');
  })
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  });
