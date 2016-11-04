module.exports = function(mainModule) {

  mainModule.component('searchResults', {
    bindings: {
      results: '<'
    },
    template: require('./template.html'),
    controller: SearchResultsCtrl
  });

  function SearchResultsCtrl(search) {
    this.results = false;

    search.registerCallback(function(d) {
      console.log('from the callback');
      console.log(d);
      this.results = d;
    }.bind(this));
  }

};
