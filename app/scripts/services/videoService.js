'use strict';

app.service('VideoService', ['$window', '$rootScope', '$log', function ($window, $rootScope, $log) {

    var service = this;

    var youtube = {
      ready: false,
      player: null,
      playerId: null,
      videoId: null,
      videoTitle: null,
      playerHeight: '100%',
      playerWidth: '100%',
      state: 'stopped'
    };
    var results = [];
    var history = [];

    $window.onYouTubeIframeAPIReady = function () {
      $log.info('Youtube API is ready');
      youtube.ready = true;
      service.bindPlayer('ytplayer');
      service.loadPlayer();
      $rootScope.$apply();
    };

    this.bindPlayer = function (elementId) {
      youtube.playerId = elementId;
    };

    this.createPlayer = function () {
      return new YT.Player(youtube.playerId, {
        height: youtube.playerHeight,
        width: youtube.playerWidth,
        playerVars: {
          rel: 0,
          showinfo: 0,
        },
      });
    };

    this.loadPlayer = function () {
      if (youtube.ready && youtube.playerId) {
        if (youtube.player) {
          youtube.player.destroy();
        }
        youtube.player = service.createPlayer();
      }
    };

    this.launchPlayer = function (id, title) {
      youtube.player.loadVideoById(id);
      youtube.videoId = id;
      youtube.videoTitle = title;
      return youtube;
    }

    this.listResults = function (data, append) {
      if (!append) {
        results.length = 0;
      }
      for (var i = data.items.length - 1; i >= 0; i--) {
        results.push({
          id: data.items[i].id.videoId,
          title: data.items[i].snippet.title,
          description: data.items[i].snippet.description,
          thumbnail: data.items[i].snippet.thumbnails.default.url,
          author: data.items[i].snippet.channelTitle
        });
      }
      return results;
    }

    this.getYoutube = function () {
      return youtube;
    };

  }]);
