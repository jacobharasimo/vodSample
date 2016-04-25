/// <reference path="../../typings/browser.d.ts" />
'use strict';

/**
 * @ngdoc function
 * @name vodApp.controller:MovieListCtrl
 * @description
 * # MovieListCtrl
 * Controller of the vodApp
 */

function MovieListCtrl() {
  this.items =[];
}

angular.module('vodApp')
  .controller('movieListCtrl', MovieListCtrl);
