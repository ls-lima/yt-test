'use strict';

/**
 * @ngdoc overview
 * @name testeApp
 * @description
 * # testeApp
 *
 * Main module of the application.
 */
var app = angular.module('testeApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ngMaterial'
]);

app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
          templateUrl : 'views/home.html',
          controller     : 'HomeCtrl',
      })
      .when('/details', {
          templateUrl : 'views/details.html',
          controller  : 'DetailsCtrl',
      })
      .otherwise ({ redirectTo: '/' });
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
  });
