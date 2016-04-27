/// <reference path="../../typings/browser.d.ts" />

class Page{
  skip:number;
  text:string;
  id:number;
  numPerPage:number = 20;
  static $inject =[
  ];
  constructor(number) {
    //correct for array OBO
    this.skip = number*this.numPerPage;
    ++number;
    this.id=number;
    this.text = number.toString();
  }

}
