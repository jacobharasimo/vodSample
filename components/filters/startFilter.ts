/// <reference path="../../typings/browser.d.ts" />

class ArrayStartFilter {
  public static Filter() {
    let filter = () => {
      return (input, s:number) => {
        let result:Array<any> = [];
        if (angular.isArray(input)) {
          result = input.slice(s);
        }
        return result;
      };
    };
    filter.$inject = [];
    return filter;
  }
}

angular.module('vodApp')
  .filter('start', ArrayStartFilter.Filter());
