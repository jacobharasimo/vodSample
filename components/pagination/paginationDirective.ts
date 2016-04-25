/// <reference path="../../typings/browser.d.ts" />
/// <reference path="./page.ts" />


class PaginationDirectiveCtrl {
  itemsPerPage:number;
  totalItems:number;
  rootPage:string;

  currentPage:number;
  pages:Page[];

  static $inject=[
    '$location'
  ];
  constructor(private $location) {
    this.currentPage = 1;
    this.pages = this.createPages();
  }

  public createPages(){
    let pages=[];
    for(var i = 0; i < Math.ceil(this.totalItems/this.itemsPerPage); i++){
      pages.push(new Page(i,this.rootPage));
    }
    return pages;
  }

  public isActive(page:IPage){
    let queryStringPage = parseInt(this.$location.search().page);
    if(!isNaN(queryStringPage)){
      if(queryStringPage===page.id){
        return true;
      }
    }else{
      if(page.id===1){
        return true;
      }
    }
    return false;
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
    totalItems:'=',
    itemsPerPage:'=',
    rootPage:'@'
  };
  scope = true;
  controller = PaginationDirectiveCtrl;
  controllerAs = 'Pagination';
  templateUrl = '/components/Pagination/Pagination.html';
}

angular.module('vodApp')
  .directive('pagination', PaginationDirective.instance());
