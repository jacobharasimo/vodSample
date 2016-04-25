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


class MovieListCtrl{
  items:Movie[];
  numPerPage:number = 20;
  constructor(){
    this.items = this.getMovies(30);
  }

  private getMovies(count){
    let list:Movie[]=[];

    for(var i =0; i<count;i++){
      let temp = new Movie({id:i});
      list.push(temp);
    }
    return list;
  }

}

angular.module('vodApp')
  .controller('movieListCtrl', MovieListCtrl);
