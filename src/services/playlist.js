module.exports = function(mainModule) {

  mainModule.factory('playlist', function() {
    this.data = [];
    const observerCallbacks = [];

    this.registerCallback = function(cb) {
      if (typeof cb !== 'function') {
        return;
      }
      observerCallbacks.push(cb);
    }

    this.notify = function() {
      observerCallbacks.forEach(function(cb) {
        cb(this.data);
      }.bind(this));
    };

    this.add = function(playlist) {
      this.data.push(playlist);
      this.notify();
    };

    return this;
  });

};
