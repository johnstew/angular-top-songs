module.exports = function(mainModule) {

  mainModule.component('playlistMain', {
    bindings: {
      showPlaylistForm: '<',
      playlistName: '<'
    },
    template: require('./template.html'),
    controller: PlaylistMainCtrl
  });

  function PlaylistMainCtrl(playlist) {
    const ctrl = this;
    ctrl.showPlaylistForm = false;
    ctrl.playlists = playlist.data;

    ctrl.handleCreateButton = function () {
      ctrl.showPlaylistForm = true;
    };

    ctrl.createPlaylist = function(e) {
      if (e.keyCode === 13) {
        playlist.add({ name: ctrl.playlistName, tracks: [] });
        // reset input
        ctrl.playlistName = '';
        ctrl.showPlaylistForm = false;
      }
    };
  }

};
