/// <reference path="../movie/movie.ts" />
/// <reference path="../../typings/browser.d.ts" />

class ApiService{
  static $inject =[];
  constructor(){}

  public getMovies(count){
    let list:Movie[] = [];
    for (var i = 0; i < count; i++) {
      let temp = new Movie({id: i});
      list.push(temp);
    }
    return list;
  }

}

angular.module('vodApp')
  .service('apiService', ApiService);
