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
  items:Movie[];
  orderBy:string;
  numPerPage:number = 20;
  static $inject = [
    '$routeParams',
    'apiService',
    'titleService',
    '$location'
  ];

  constructor($routeParams, apiService, titleService, private $location) {
    titleService.setTitle('Movie List');
    this.items = apiService.getMovies();
    this.orderBy = this.$location.search().orderBy || 'title';
  }

  skipParam() {
    return this.$location.search().skip || 0;
  }

  orderByParam() {
    return this.$location.search().orderBy || 'title';
  }

  sort(orderBy) {
    this.$location.search('orderBy', orderBy);
  }
}

angular.module('vodApp')
  .controller('movieListCtrl', MovieListCtrl);
