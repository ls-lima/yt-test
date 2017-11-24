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

app.run(function () {
  var tag = document.createElement('script');
  tag.src = '//www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});

app.config(function ($routeProvider, $locationProvider, $mdThemingProvider, $httpProvider) {

  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $mdThemingProvider.theme('default')
  .primaryPalette('grey')
  .accentPalette('red')
  .warnPalette('amber');


  $locationProvider.html5Mode(true);

  $routeProvider
      .when('/', {
        templateUrl : 'views/home.html',
        controller     : 'HomeCtrl',
    })
    .when('/details', {
        templateUrl : 'views/details.html',
        controller  : 'DetailsCtrl',
    }).otherwise ({ redirectTo: '/' });
  });
