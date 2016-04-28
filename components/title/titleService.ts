/// <reference path="../../typings/browser.d.ts" />

class TitleService {
  static $inject = [];
  title:string;

  constructor() {
  }

  public setTitle(title) {
    this.title = title;
  }

  public getTitle() {
    return this.title || 'VOD';
  }
}

angular.module('vodApp')
  .service('titleService', TitleService);
