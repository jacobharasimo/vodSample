/// <reference path="../../typings/browser.d.ts" />

interface IMovie{
id:number;
}

class Movie implements  IMovie{
  id:number;
  constructor(movie){
    movie = movie.Item;
    this.id=movie.Id;
  }

}
