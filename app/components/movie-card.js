import Component from '@ember/component';

class MovieItem {

  constructor(title, year) {
    this._title = title;
    this._year = year;
  }

  get movieTitle() {
    return this._title;
  }

  set title(title) {
    this_title = title;
  }

  // Other operations


}

export default Component.extend({

  actions: {
    details() {
      alert("View");
    }
  }

});
