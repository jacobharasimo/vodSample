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
    'apiService',
    'titleService'
  ];

  constructor($routeParams, apiService, titleService) {
    titleService.setTitle('Movie List');
    this.skip = parseInt($routeParams.pageId) - 1;
    this.skip = this.skip * this.numPerPage;
    this.items = apiService.getMovies();
  }


}

angular.module('vodApp')
  .controller('movieListCtrl', MovieListCtrl);
