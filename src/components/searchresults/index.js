module.exports = function(mainModule) {

  mainModule.component('searchResults', {
    bindings: {
      results: '<'
    },
    template: require('./template.html'),
    controller: SearchResultsCtrl
  });

  function SearchResultsCtrl(search, playlist) {
    var ctrl = this;
    ctrl.results = false;
    ctrl.playlists = playlist.data;
    ctrl.showPlaylists = false;
    ctrl.playlistsSelected = {};

    search.registerCallback(function(d) {
      ctrl.results = d;
    });

    ctrl.handleShowPlaylists = function(track) {
      track.showPlaylists = true;
      ctrl.playlistsSelected = {};
    };

    ctrl.handleAddTrack = function(track) {
      Object.keys(ctrl.playlistsSelected).forEach(function(key) {
        if (ctrl.playlistsSelected[key]) {
          playlist.data.forEach(function(p) {
            if (p.name === key) {
              p.tracks.push(track);
            }
          });
        }
      });
      track.showPlaylists = false;
    };

    ctrl.handlePlaylistChecked = function(playlist) {
      if (ctrl.playlistsSelected[playlist.name]) {
        ctrl.playlistsSelected[playlist.name] = false;
      } else {
        ctrl.playlistsSelected[playlist.name] = playlist;
      }
    };

  }

};
