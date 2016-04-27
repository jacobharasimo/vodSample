/// <reference path="../../typings/browser.d.ts" />
/// <reference path="./page.ts" />


class PaginationDirectiveCtrl {
  itemsPerPage:number;
  totalItems:number;
  rootPage:string;
  maxPagination:number;
  currentPage:number;
  pages:Page[];
  numPerPage:number = 20;
  orderBy:string;
  static $inject = [
    '$location',
    '$routeParams'
  ];

  constructor(private $location, private $routeParams) {

    this.currentPage = (parseInt($routeParams.skip) / this.numPerPage) || 0;
    this.orderBy = $routeParams.orderBy;
    ++this.currentPage;
    this.pages = this.createPages();
  }

  public firstPagination():number {
    let result = 0;
    let offset = Math.floor(this.maxPagination / 2);
    //dont move until page 3

    if (this.currentPage <= offset) {
      result = 0;
    }
    else if (this.currentPage > offset && this.currentPage < (this.pages.length - offset)) {
      result = this.currentPage - Math.floor(this.maxPagination / 2);
    }
    else {
      result = this.pages.length - this.maxPagination;
    }
    return result;
  }

  private objectToQueryString(obj) {
    let resultArray = [];
    let result:string = '';
    angular.forEach(obj, (value, key)=> {
      resultArray.push(key + '=' + value);
    });
    if (resultArray.length) {
      result = '?' + resultArray.join('&');
    }
    return result;
  }

  public createLink(skip) {
    let params = angular.copy(this.$location.search());
    delete params.skip;
    if (skip > 0) {
      params.skip = skip;
    }

    let view = '/movies' + this.objectToQueryString(params);
    return view;
  }

  public goTo(view):void {
    view = view.split('#')[1];
    this.$location.search(view);
  }

  public changePage(skip):void {
    if(skip<=0){
      skip=null;
    }
    this.$location.search('skip', skip);
  }

  public disableNextPage():boolean {
    return !(this.getCurrentPage() !== this.pages.length && this.pages.length > 1);
  }

  public disablePreviousPage():boolean {
    return !(this.getCurrentPage() > 1 && this.pages.length > 1);
  }

  public nextPage():number {
    return parseInt(this.$location.search().skip)+this.numPerPage;
  }

  public previousPage():number {
    return parseInt(this.$location.search().skip)-this.numPerPage;
  }

  public createPages():Page[] {
    let pages = [];
    for (var i = 0; i < Math.ceil(this.totalItems / this.itemsPerPage); i++) {
      pages.push(new Page(i));
    }
    return pages;
  }

  private getCurrentPage() {
    let skip = (parseInt(this.$location.search().skip) / this.numPerPage) || 0;
    return ++skip;
  }

  public isActive(page:Page):boolean {
    let current = this.getCurrentPage();
    return current === page.id;
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
