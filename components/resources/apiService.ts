/// <reference path="../movie/movie.ts" />
/// <reference path="../../typings/browser.d.ts" />

class ApiService {
  static $inject = [
    '$http',
    '$log'
  ];

  constructor(private $http:ng.IHttpService, private $log:ng.ILogService) {
  }

  public getMovies() {
    return this.$http({
      method: 'GET',
      url: '/dataSource/feed.json'
    }).then((response)=> {
        //success block
        if (response.data.hasOwnProperty('Data')) {
          (<any>response.data).Data = (<any>response.data).Data.map((item)=> {
            return new Movie(item);
          });
        }
        return response.data;
      },
      (response)=> {
        this.$log.warn(response);
        //error block
      });
  }

}

angular.module('vodApp')
  .service('apiService', ApiService);
