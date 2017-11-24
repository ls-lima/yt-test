'use strict';

app.service('NavigationService', ['$window', '$rootScope', '$log', function ($window, $rootScope, $log) {
  var service = this;

  this.homeState = {
    searchValue: '',
    videoList: [],
    ishomeStateSet: false
  };

  this.selectedVideo = {
    title: '',
    thumbnail: '',
    description: '',
    channel: '',
    videoId: '',
    viewCount: 0
  };

  this.isHomeStateSet = function() {
    return this.homeState.ishomeStateSet;
  };

  this.setHomeState = function(searchInput, videoList) {
    this.homeState = {
      searchInput: searchInput,
      videoList: videoList,
      ishomeStateSet: true
    };
  };

  this.getHomeState = function() {
    return this.homeState;
  };

  this.getFullSizeVideoImage = function(thumbnailUrl) {
    return thumbnailUrl.substr(0, thumbnailUrl.lastIndexOf('/')+1) + '0.jpg';
  };

  this.setSelectedVideo = function(videoData) {
    this.selectedVideo = { ...videoData };
  };

  this.getSelectedVideo = function() {
    return this.selectedVideo;
  };
}]);
