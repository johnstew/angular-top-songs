var angular = require('angular');
var spotify = require('angular-spotify');

const mainModule = angular.module('top-songs', ['spotify']);

require('./components')(mainModule);

mainModule.component('counter', {
  bindings: {
    count: '='
  },
  controller: function () {
    function increment() {
      this.count++;
    }
    function decrement() {
      this.count--;
    }
    this.increment = increment;
    this.decrement = decrement;
    this.count = 4;
  },
  template: [
    '<div class="todo">',
      '<input type="text" ng-model="$ctrl.count">',
      '<button type="button" ng-click="$ctrl.decrement();">-</button>',
      '<button type="button" ng-click="$ctrl.increment();">+</button>',
    '</div>'
  ].join('')
});
