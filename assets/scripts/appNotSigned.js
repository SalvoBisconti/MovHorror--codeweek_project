import {
  qS,
  movieGeneratorNotSigned,
  heroChange,
  details,
  slider,
  navScroll,
} from "./utils.js";
import { GET } from "./api.js";

const moviesList = qS(".movies-list");

Promise.all([
  GET("discover", "movie", "1"),
  GET("discover", "movie", "2"),
  GET("discover", "movie", "3"),
])
  .then((data) => {
    heroChange(data, "./assets/unsigned-html/selectedMovie.html");
    data[0].results.map((movie) =>
      moviesList.appendChild(
        movieGeneratorNotSigned(
          movie,
          "../assets/unsigned-html/selectedMovie.html"
        )
      )
    );
    data[1].results.map((movie) =>
      moviesList.appendChild(
        movieGeneratorNotSigned(
          movie,
          "../assets/unsigned-html/selectedMovie.html"
        )
      )
    );
    data[2].results.map((movie) =>
      moviesList.appendChild(
        movieGeneratorNotSigned(
          movie,
          "../assets/unsigned-html/selectedMovie.html"
        )
      )
    );
  })
  .then(() => {
    details();
    slider(".movies-list", ".slide-movie-right", ".slide-movie-left");
    navScroll();
  });
