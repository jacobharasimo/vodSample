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
  orderBy:string;
  skip:number;
  items:Movie[];
  numPerPage:number = 20;
  static $inject = [
    '$routeParams',
    'apiService',
    'titleService',
    '$location'
  ];

  constructor($routeParams, apiService, titleService, private $location) {
    titleService.setTitle('Movie List');
    this.orderBy = $routeParams.orderBy || 'title';
    this.skip = $routeParams.skip;
    this.items = apiService.getMovies();
  }
  sort(orderBy){
    this.$location.path('movies/'+orderBy);
  }
}

angular.module('vodApp')
  .controller('movieListCtrl', MovieListCtrl);
