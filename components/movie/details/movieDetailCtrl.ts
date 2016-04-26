/// <reference path="../../../typings/browser.d.ts" />
/// <reference path="./../movie.ts" />
'use strict';

/**
 * @ngdoc function
 * @name vodApp.controller:MovieDetailCtrl
 * @description
 * # MovieDetailCtrl
 * Controller of the vodApp
 */


class MovieDetailCtrl {
  $inject = [
    '$routeParams',
    'apiService',
    'titleService'
  ];
  movie:Movie;

  constructor(private $routeParams, apiService, titleService) {
    /*Normally this would be a separate API that returns just the matched record, but since were working from a
     * file not a DB small hack/work around*/
    apiService.getMovies().$promise.then((results)=> {
      let itemArray = results.Data;
      for (var i = 0; i < itemArray.length; ++i) {
        if (itemArray[i].id === $routeParams.movieId) {
          titleService.setTitle(itemArray[i].title);
          return this.movie = itemArray[i];
        }
      }
    });
  }
}

angular.module('vodApp')
  .controller('movieDetailCtrl', MovieDetailCtrl);
