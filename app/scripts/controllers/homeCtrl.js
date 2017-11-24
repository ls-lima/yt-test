'use strict';

app.controller('HomeCtrl', function($rootScope, $http, $log, $location, VideoService, NavigationService) {

  function init() {
    if (NavigationService.isHomeStateSet()) {
      var state = NavigationService.getHomeState();
      $rootScope.videoList = state.videoList;
      $rootScope.model.searchValue = state.searchInput;
    }
  };

  $rootScope.videoList = [];
  $rootScope.model = {
    searchValue: '',
    message: '',
    loading: false,
    modalLoading: false
  };

  $rootScope.activetab = $location.path();
   this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $rootScope.openDetails = function(selectedVideo) {
    // $rootScope.model.modalLoading = true;
    return $http.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: 'AIzaSyBN3GhVk4ozitxdAqEuo5IGi0xmQWAh11I',
        part: 'statistics,snippet',
        id: selectedVideo.id
      }
    }).then(function (response) {
      // $rootScope.model.modalLoading = false;
      let data = response.data;
      if (!data.items || !data.items.length)
        return false;

      let videoObject = {
        viewCount: data.items[0].statistics.viewCount,
        videoId: data.items[0].id,
        title: data.items[0].snippet.title,
        channel: data.items[0].snippet.channelTitle,
        description: data.items[0].snippet.description,
        thumbnail: data.items[0].snippet.thumbnails.high.url
      }
      NavigationService.setSelectedVideo(videoObject);
      NavigationService.setHomeState($rootScope.model.searchValue, $rootScope.videoList);
      $location.url('/details');
    }, function (error) {
      $log.info('Could not get video info: ', error);
      // $rootScope.model.modalLoading = false;
    });
  };


  $rootScope.search = function (isNewQuery) {
    $rootScope.model.loading = true;

    if (isNewQuery)
      $rootScope.videoList = [];

    return $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyBN3GhVk4ozitxdAqEuo5IGi0xmQWAh11I',
        type: 'video',
        maxResults: '5',
        pageToken: isNewQuery ? '' : $rootScope.nextPageToken,
        part: 'id,snippet',
        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken',
        q: $rootScope.model.searchValue
      }
    })
    .then(function (response) {
      let data = response.data;

      if (data.items.length === 0) {
        $rootScope.label = 'No results were found!';
      }
      $rootScope.videoList = VideoService.listResults(data, $rootScope.nextPageToken && !isNewQuery);
      $rootScope.nextPageToken = data.nextPageToken;
      $log.info(data);
      $rootScope.model.loading = false;
    },
    function (error) {
      $log.info('Search error: ', error);
      $rootScope.model.loading = false;
    });
  };

  init();
});

