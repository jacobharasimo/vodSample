/// <reference path="../movie/movie.ts" />
/// <reference path="../../typings/browser.d.ts" />

class ApiService {
  static $inject = [
    '$http',
    '$log',
    '$resource'
  ];

  constructor(private $http:ng.IHttpService, private $log:ng.ILogService, private $resource) {
    return this.$resource('/dataSource/feed.json', {}, {
      getMovies: {
        method: 'GET',
        transformResponse: (response)=> {
          response = angular.fromJson(response);
          if (response.hasOwnProperty('Data')) {
            response.Data = response.Data.map((item)=> {
              return new Movie(item);
            });
          }
          return response;
        }
      }
    });
  }
}

angular.module('vodApp')
  .service('apiService', ApiService);
