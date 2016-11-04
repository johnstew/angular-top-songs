var angular = require('angular');
var spotify = require('angular-spotify');

const mainModule = angular.module('top-songs', ['spotify']);

// components
require('./components')(mainModule);

// services
require('./services')(mainModule);
