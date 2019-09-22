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
    return this.title;
  }
  set movieTitle(value) {
    this.title = value;
  }

}

export default Component.extend({
  actions: {
   callMade() {
     // Call the popover view, pass several data points
     showPopoverDetails();
   }
    
  }
});

function sampleMovies() {
  return ("The Dark Knight", "Home Alone 5", "The Internship");
}

// Show Dialog on the DOM
function showPopoverDetails() {
  // Go through the DOM and find the element by it's ID.
  
  var p = document.getElementById('popoverContainer');
  var initial_position = 0;
  var id = setInterval(frame, 10);
  p.hidden = false;
  
  function frame() {
    
    console.log("Frame called");
    if (initial_position == 350) {
      clearInterval(id);
    } else {
      initial_position++;
      p.style.top = initial_position + 'px';
      p.style.left = initial_position + 'px';
    }
  }
  
  // Return the counter back to zero
    

}
