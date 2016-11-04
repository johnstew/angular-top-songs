module.exports = function(mainModule) {

  mainModule.component('search', {
    bindings: {
      placeholder: '@',
      input: '<'
    },
    template: require('./template.html'),
    controller: SearchController
  });

  function SearchController(Spotify, search) {
    const ctrl = this;

    ctrl.handleKeyUp = function(e) {
      if (e.keyCode === 13) {
        Spotify.search(ctrl.input, 'album,artist,track')
        .then(function(data) {
          search.data = data;
          search.notify();
        })
        .catch(function(error) {
          console.error(error);
          search.error = error;
        });
      }
    }
  }

};
