/// <reference path="../../typings/browser.d.ts" />

interface IMovie{
id:number;
}

class MetaValue{
  label:string;
  value:string;
  constructor(label,value){
    this.label = label;
    this.value = value;
  }
}

class MovieMeta{
  duration:MetaValue;
  releaseYear:MetaValue;
  constructor(movie){
    this.releaseYear = new MetaValue('Year',parseInt(movie.ReleaseYear));
    this.duration = new MetaValue('Duration',Math.ceil(movie.RunTimeSec/60)+'min');
  }
}

class Movie implements  IMovie{
  id:number;
  images:Array<any>;
  title:string;
  meta:MovieMeta;


  constructor(movie){
    movie = movie.Item;
    this.id=movie.Id;
    this.images = movie.Images;
    this.title = movie.Title;
    this.meta= new MovieMeta(movie);
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
