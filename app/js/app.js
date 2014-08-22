'use strict';

/* App Module */


angular.module('pocketannie', ['autocomplete', 'ngRoute', 'ngGrid', 'pocketAnnieAppServices', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	  when('/dashboard', {templateUrl: 'partials/main-dash.html',   controller: MainCtrl}).
      when('/select', {templateUrl:'partials/game-choose.html', controller: GameSelectCtrl}).
      when('/game', {templateUrl:'partials/game-dash.html', controller: GameDashCtrl}).
      when('/game/:param1', {templateUrl:'partials/game-dash.html', controller: GameDashCtrl}).
      when('/apprank', {templateUrl:'partials/apprank.html', controller: AppRankCtrl}).
  	  //when('/add', {templateUrl: 'partials/add-book.html',   controller: MainCtrl}).
      otherwise({redirectTo: '/game'});
}]);
