/// <reference path="../../typings/browser.d.ts" />

class TitleDirectiveCtrl {
  static $inject = [
    'titleService'
  ];

  constructor(private titleService) {
  }
}

class TitleDirective implements ng.IDirective {
  /*if we need to inject dependencies into the directive class we do it the following way*/
  static instance():ng.IDirectiveFactory {
    var directive = () =>new TitleDirective();
    directive.$inject = [];
    return directive;
  }

  restrict = 'E';
  replace = false;
  bindToController = {};
  scope = true;
  controller = TitleDirectiveCtrl;
  controllerAs = 'Title';
}

angular.module('vodApp')
  .directive('title', TitleDirective.instance());
