module.exports = function(mainModule) {

  mainModule.component('search', {
    bindings: {
      input: '='
    },
    template: require('./template.html'),
    controller: function() {
      console.log('Search Angular Component');
      this.input = '';
    }
  });

};
