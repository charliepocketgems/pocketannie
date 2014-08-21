'use strict';

/* App Module */


angular.module('pocketannie', ['ngRoute', 'ngGrid', 'pocketAnnieAppServices', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	  when('/dashboard', {templateUrl: 'partials/main-dash.html',   controller: MainCtrl}).
      when('/game', {templateUrl:'partials/game-dash.html', controller: GameDashCtrl}).
      when('/game/:param1', {templateUrl:'partials/game-dash.html', controller: GameDashCtrl}).
  	  //when('/add', {templateUrl: 'partials/add-book.html',   controller: MainCtrl}).
      otherwise({redirectTo: '/game'});
}]);