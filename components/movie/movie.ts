/// <reference path="../../typings/browser.d.ts" />
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

class Movie{
  id:number;
  images:Array<any>;
  title:string;
  meta:MovieMeta;
  description:string;
  directors:string[];

  constructor(movie){
    movie = movie.Item;
    this.id=movie.Id;
    this.images = movie.Images;
    this.title = movie.Title;
    this.meta= new MovieMeta(movie);
    this.description= movie.ShortSynopsis;
    this.directors = movie.Directors;
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
