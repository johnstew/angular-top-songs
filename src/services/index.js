module.exports = function(mainModule) {
  require('./search')(mainModule);
  require('./playlist')(mainModule);
};
