'use strict';

app.controller('DetailsCtrl', function($rootScope, $location, VideoService) {
  $rootScope.activetab = $location.path();

  init();

  function init() {
    $rootScope.youtube = VideoService.getYoutube();
  }

  $rootScope.showVideoModal = function(event) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'templates/yt-player.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true,
      fullscreen: $rootScope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      youtube.player.stopVideo();
    }, function() {
      youtube.player.stopVideo();
    });
  };
});
