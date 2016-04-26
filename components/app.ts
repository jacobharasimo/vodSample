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
    $routeProvider
      .when('/movies/:pageId?', {
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
        redirectTo: '/movies'
      });
  });
