'use strict';

app.controller('HomeCtrl', function($rootScope, $location)
{
   $rootScope.activetab = $location.path();
   this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
