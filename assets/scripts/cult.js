import {
  qS,
  movieGenerator,
  details,
  logoutShow,
  addFavoriteFunc,
  navScroll,
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
        movieGenerator(movie, "../img/add-fav.png", "add-fav-imgIndex")
      )
    );
    data[1].results.map((movie) =>
      moviesList.appendChild(
        movieGenerator(movie, "../img/add-fav.png", "add-fav-imgIndex")
      )
    );
    data[2].results.map((movie) =>
      moviesList.appendChild(
        movieGenerator(movie, "../img/add-fav.png", "add-fav-imgIndex")
      )
    );
  })
  .then(() => {
    details();
    logoutShow();
    addFavoriteFunc();
    navScroll();
  });
