var app = angular.module('app',['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $locationProvider)
{
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