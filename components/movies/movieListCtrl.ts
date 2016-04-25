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
    '$routeParams'
  ];
  constructor($routeParams) {
    this.skip = parseInt($routeParams.pageId) - 1;
    this.skip = this.skip * this.numPerPage;
    this.items = this.getMovies(80);
  }

  private getMovies(count) {
    let list:Movie[] = [];
    for (var i = 0; i < count; i++) {
      let temp = new Movie({id: i});
      list.push(temp);
    }
    return list;
  }

}

angular.module('vodApp')
  .controller('movieListCtrl', MovieListCtrl);
