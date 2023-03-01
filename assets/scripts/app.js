import {
  qS,
  cE,
  qSA,
  movieGenerator,
  heroChange,
  details,
  addFavoriteFunc,
  slider,
  logoutShow,
  navScroll,
  favoriteGenerator,
  hamburgerGen,
} from "./utils.js";
import { GET, GET2 } from "./api.js";

const moviesList = qS(".movies-list");
var favList = JSON.parse(localStorage["favList"]);
const favListSec = qS(".favorite-list");

Promise.all([
  GET("discover", "movie", "1"),
  GET("discover", "movie", "2"),
  GET("discover", "movie", "3"),
])
  .then((data) => {
    heroChange(data, "./selectedMovie.html");
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
    slider(".movies-list", ".slide-movie-right", ".slide-movie-left");
    addFavoriteFunc();
    navScroll();
  });

favList.forEach((item) => {
  GET2("movie", `${item}`)
    .then((data) => {
      favListSec.appendChild(
        favoriteGenerator(data, "../img/fav-select.png", "addFavorite-img")
      );
    })
    .then(() => {
      details();

      logoutShow();
      navScroll();
      slider(
        ".favorite-list",
        ".slide-movie-right-fav",
        ".slide-movie-left-fav"
      );
      hamburgerGen(
        "Logout",
        ".hamburger",
        "../../index.html",
        "../signed-html/favorites.html",
        "../signed-html/cult.html"
      );
    });
});
