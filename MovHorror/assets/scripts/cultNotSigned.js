import {
  qS,
  movieGeneratorNotSigned,
  details,
  navScroll,
  hamburgerGen,
} from "./utils.js";
import { GET } from "./api.js";

const moviesList = qS(".cult-list");
Promise.all([
  GET("discover", "movie", "1", "&sort_by=popularity.desc&year=1980"),
  GET("discover", "movie", "2", "&sort_by=popularity.desc&year=1980"),
  GET("discover", "movie", "3", "&sort_by=popularity.desc&year=1980"),
])
  .then((data) => {
    data[0].results.map((movie) =>
      moviesList.appendChild(
        movieGeneratorNotSigned(movie, "./selectedMovie.html")
      )
    );
    data[1].results.map((movie) =>
      moviesList.appendChild(
        movieGeneratorNotSigned(movie, "./selectedMovie.html")
      )
    );
    data[2].results.map((movie) =>
      moviesList.appendChild(
        movieGeneratorNotSigned(movie, "./selectedMovie.html")
      )
    );
  })
  .then(() => {
    details();
    navScroll();
    hamburgerGen(
      "Accedi",
      ".hamburger",
      "../unsigned-html/login.html",
      "../unsigned-html/favorites.html",
      "../unsigned-html/cult.html"
    );
  });
