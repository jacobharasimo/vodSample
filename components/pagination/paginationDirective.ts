/// <reference path="../../typings/browser.d.ts" />
/// <reference path="./page.ts" />


class PaginationDirectiveCtrl {
  itemsPerPage:number;
  totalItems:number;
  rootPage:string;
  maxPagination:number;
  currentPage:number;
  pages:Page[];

  static $inject = [
    '$location',
    '$routeParams'
  ];

  constructor(private $location, private $routeParams) {
    this.currentPage = parseInt($routeParams.pageId || 1);
    this.pages = this.createPages();
  }

  public firstPagination():number {
    let result = 0;
let offset = Math.floor(this.maxPagination / 2);
    //dont move until page 3

    if(this.currentPage <= offset){
      result =0;
    }
    else if (this.currentPage > offset && this.currentPage < (this.pages.length-offset)){
      result = this.currentPage - Math.floor(this.maxPagination / 2);
    }
    else {
      result = this.pages.length -  this.maxPagination ;
    }




    return result;
  }

  public goTo(view):void {
    view = view.split('#')[1];
    this.$location.path(view);
  }

  public disableNextPage():boolean {
    return !(this.currentPage !== this.pages.length && this.pages.length > 1);
  }

  public disablePreviousPage():boolean {
    return !(this.currentPage > 1 && this.pages.length > 1);
  }

  public nextPage():string {
    return this.rootPage + '/' + (this.currentPage + 1);
  }

  public previousPage():string {
    return this.rootPage + '/' + (this.currentPage - 1);
  }

  public createPages():Page[] {
    let pages = [];
    for (var i = 0; i < Math.ceil(this.totalItems / this.itemsPerPage); i++) {
      pages.push(new Page(i, this.rootPage));
    }
    return pages;
  }

  public isActive(page:IPage):boolean {
    return this.currentPage === page.id;
  }
}

class PaginationDirective implements ng.IDirective {
  /*if we need to inject dependencies into the directive class we do it the following way*/
  static instance():ng.IDirectiveFactory {
    var directive = () =>new PaginationDirective();
    directive.$inject = [];
    return directive;
  }

  restrict = 'E';
  replace = false;
  bindToController = {
    totalItems: '=',
    itemsPerPage: '=',
    rootPage: '@',
    maxPagination: '='
  };
  scope = true;
  controller = PaginationDirectiveCtrl;
  controllerAs = 'Pagination';
  templateUrl = '/components/Pagination/Pagination.html';
}

angular.module('vodApp')
  .directive('pagination', PaginationDirective.instance());
