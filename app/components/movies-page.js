import Component from '@ember/component';


class MovieObject {
  constructor(title, movieDescription, runtime, rating, searchKeyword) {
    this.title = title;
    this.description = movieDescription;
    this.runtime = runtime;
    this.rating = rating;
    this.keyword = searchKeyword;
  }

  // Setters and getters for the movie that we are constructing
  get movieTitle() {
    return this._movieTitle;
  }
  set movieTitle(value) {
    this._movieTitle = value;
  }
 

}

export default Component.extend({

  model() {
    return sampleMovies;
  }
});



function sampleMovies() {

  // Build a movie object using the class above
  

  return ("The Dark Knight", "Home Alone 5", "The Internship");
}
