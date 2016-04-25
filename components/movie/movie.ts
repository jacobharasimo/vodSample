/// <reference path="../../typings/browser.d.ts" />

interface IMovie{
id:number;
}

class Movie implements  IMovie{
  id:number;
  images:Array<any>;
  title:string;
  duration:number;
  releaseYear:number;

  constructor(movie){
    movie = movie.Item;
    this.id=movie.Id;
    this.images = movie.Images;
    this.title = movie.Title;
    this.releaseYear = parseInt(movie.ReleaseYear);
    this.duration = Math.ceil(movie.RunTimeSec/60);
  }

  public assetLink():string{
    return '#/movie/'+this.id;
  }

  public coverAsset():string{
    let cover;
    for(var i =0; i<this.images.length;i++){
      let img= this.images[i];
      if(img.Type===1){
        cover = img.ImageId;
        break;
      }
    }
    return cover;
  }

}
