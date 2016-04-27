/// <reference path="../typings/browser.d.ts" />
'use strict';

/**
 * @ngdoc overview
 * @name vodApp
 * @description
 * # vodApp
 *
 * Main module of the application.
 */
angular
  .module('vodApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    /*normally would use ui-router here. We also could of used query string values. if we has used that we could set
    reloadOnSearch to false and bind to the values in the controller, thus allowing us to update the results as change.
    however since we have no loading UI right now that can make it a strange experience if live data, thus opted for
    routeParams*/
    $routeProvider
      .when('/movies/:orderBy/:skip?', {
        templateUrl: '/components/movies/movieList.html',
        controller: 'movieListCtrl',
        controllerAs: 'movieList'
      })
      .when('/movie/:movieId', {
        templateUrl: '/components/movie/details/movieDetail.html',
        controller: 'movieDetailCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/movies/title'
      });
  });
