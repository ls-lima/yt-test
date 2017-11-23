'use strict';

app.controller('HomeCtrl', function($rootScope, $http, $log, $location, VideoService) {

  $rootScope.loading = false;
  $rootScope.videoList = [];
  $rootScope.model = {
    searchValue: '',
    message: ''
  }

  $rootScope.activetab = $location.path();
   this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $rootScope.search = function (isNewQuery) {
    $rootScope.loading = true;
    return $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: 'AIzaSyBN3GhVk4ozitxdAqEuo5IGi0xmQWAh11I',
        type: 'video',
        maxResults: '10',
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
      $rootScope.loading = false;
    },
    function (error) {
      $log.info('Search error: ', error);
      $rootScope.loading = false;
    });
  };

});
