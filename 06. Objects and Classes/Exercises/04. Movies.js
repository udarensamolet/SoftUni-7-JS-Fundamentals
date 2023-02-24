function movies(input) {
  class Movie {
    constructor(name) {
      this.name = name;
    }
  }

  let movies = [];

  for (let i = 0; i < input.length; i++) {
    let tokens = input[i];
    if (tokens.includes(`addMovie`)) {
      let name = tokens.substring(9, tokens.length);
      let movie = new Movie(name);
      movies.push(movie);
    } else if (tokens.includes(`directedBy`)) {
      let name = tokens.substring(0, tokens.indexOf(` directedBy`));
      let director = tokens.substring(tokens.indexOf(` directedBy`) + 12);
      for (let movie of movies) {
        if (movie.name == name) {
          movie.director = director;
          break;
        }
      }
    } else if (tokens.includes(`onDate`)) {
      let name = tokens.substring(0, tokens.indexOf(` onDate`));
      let date = tokens.substring(tokens.indexOf(` onDate`) + 8);
      for (let movie of movies) {
        if (movie.name == name) {
          movie.date = date;
          break;
        }
      }
    }
  }

  for (let movie of movies) {
    if (
      movie.name != undefined &&
      movie.director != undefined &&
      movie.date != undefined
    ) {
      let jsonString = JSON.stringify(movie);
      console.log(jsonString);
    }
  }
}