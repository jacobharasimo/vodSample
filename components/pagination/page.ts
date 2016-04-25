/// <reference path="../../typings/browser.d.ts" />

interface IPage{
  link:string;
  text:string;
  id:number;
}


class Page implements IPage{
  link:string;
  text:string;
  id:number;
  static $inject =[

  ];
  constructor(number, rootPage) {
    //correct for array OBO
    number++;
    this.link = rootPage+'/'+number;
    this.id=number;
    this.text = number.toString();
  }

}
