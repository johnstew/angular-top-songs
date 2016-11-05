module.exports = function(mainModule) {
  require('./search')(mainModule);
  require('./searchresults')(mainModule);
  require('./playlistmain')(mainModule);
};
