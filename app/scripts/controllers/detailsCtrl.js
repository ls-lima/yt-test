'use strict';

app.controller('DetailsCtrl', function($rootScope, $location, $mdDialog, VideoService, NavigationService) {
  $rootScope.activetab = $location.path();

  $rootScope.videoData = {
    videoId: '',
    thumbnail: '',
    title: '',
    description: '',
    channel: '',
    viewCount: 0
  };

  function init() {
    $rootScope.videoData = { ...NavigationService.getSelectedVideo() };
    $rootScope.youtube = VideoService.getYoutube();
  };


  $rootScope.launch = function(video) {
    VideoService.launchPlayer(video.videoId, video.title)
  }

  $rootScope.showVideoModal = function(event) {
    $mdDialog.show({
      contentElement: '#ytdialog',
      parent: angular.element(document.body),
      targetEvent: event,
      clickOutsideToClose:true,
      fullscreen: false // Only for -xs, -sm breakpoints.
    });
  };

  $rootScope.goBack = function() {
    $location.url('/');
  }

  init();
});
