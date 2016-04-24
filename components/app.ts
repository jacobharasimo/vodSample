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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
