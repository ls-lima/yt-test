var app = angular.module('app',['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $locationProvider, $mdThemingProvider)
{
  $mdThemingProvider.alwaysWatchTheme(true);
  
  $mdThemingProvider
  .theme('default')
  .primaryPalette('blue')
  .accentPalette('teal')
  .warnPalette('red')
  .backgroundPalette('grey');


  $locationProvider.html5Mode(true);

  $routeProvider

   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
  .when('/', {
    templateUrl : 'app/views/home.html',
    controller     : 'HomeCtrl',
  })
  .when('/sobre', {
    templateUrl : 'app/views/details.html',
    controller  : 'DetailsCtrl',
  })
  .otherwise ({ redirectTo: '/' });
});