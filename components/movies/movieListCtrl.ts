/// <reference path="../../typings/browser.d.ts" />
/// <reference path="../movie/movie.ts" />
'use strict';

/**
 * @ngdoc function
 * @name vodApp.controller:MovieListCtrl
 * @description
 * # MovieListCtrl
 * Controller of the vodApp
 */


class MovieListCtrl {
  skip:number;
  items:Movie[];
  numPerPage:number = 20;
  static $inject = [
    '$routeParams',
    'apiService'
  ];
  constructor($routeParams, apiService) {
    this.skip = parseInt($routeParams.pageId) - 1;
    this.skip = this.skip * this.numPerPage;
    this.items = apiService.getMovies(300);
  }


}

angular.module('vodApp')
  .controller('movieListCtrl', MovieListCtrl);
