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
  genre:string;
  numPerPage:number = 20;
  static $inject = [
    'apiService',
    'titleService',
    '$location'
  ];

  constructor(apiService, titleService, private $location) {
    titleService.setTitle('Movie List');
    this.genre = decodeURIComponent($location.search().genre) || '';
    this.items = apiService.getMovies();
    this.orderBy = this.$location.search().orderBy || 'title';

  }


  filterGenre(param){
    if(param===null){
      delete this.$location.search('genre',null);
    }
    else{
      this.$location.search('genre',encodeURIComponent(param));
    }
  }

  genreParam(){
    let result = '';
    if(this.$location.search().hasOwnProperty('genre')){
      result=decodeURIComponent(this.$location.search().genre);
    }
    return result.toLowerCase();
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
