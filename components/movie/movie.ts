/// <reference path="../../typings/browser.d.ts" />

class Movie {
  id:number;
  images:Array<any>;
  title:string;
  releaseYear:number;
  duration:number;
  description:string;
  directors:string[];
  genres:string[];

  constructor(movie) {
    movie = movie.Item;
    this.id = movie.Id;
    this.images = movie.Images;
    this.title = movie.Title;
    this.duration = null;
    if (!!movie.ReleaseYear) {
      this.duration = Math.ceil(movie.RunTimeSec / 60);
    }
    this.releaseYear = parseInt(movie.ReleaseYear);
    this.description = movie.ShortSynopsis;
    this.directors = movie.Directors;
    this.genres = movie.Genres.map(function(item){
      return item.Name.toLowerCase();
    });
  }

  public assetLink():string {
    return '#/movie/' + this.id;
  }

  public coverAsset():string {
    let cover;
    for (var i = 0; i < this.images.length; i++) {
      let img = this.images[i];
      if (img.Type === 1) {
        cover = img.ImageId;
        break;
      }
    }
    return cover;
  }

}
