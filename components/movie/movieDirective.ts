/// <reference path="../../typings/browser.d.ts" />

class MovieDirectiveCtrl {

}

class MovieDirective implements ng.IDirective {
  /*if we need to inject dependencies into the directive class we do it the following way*/
  static instance():ng.IDirectiveFactory {
    var directive = () =>new MovieDirective();
    directive.$inject = [];
    return directive;
  }

  restrict = 'E';
  replace = false;
  bindToController ={
    movie:'='
  };
  scope = true;
  controller = MovieDirectiveCtrl;
  controllerAs = 'Movie';
  templateUrl = '/components/movie/movie.html';
}

angular.module('vodApp')
  .directive('movie', MovieDirective.instance());
