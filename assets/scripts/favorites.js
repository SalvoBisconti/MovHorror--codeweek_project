import {
  qS,
  details,
  favoriteGenerator,
  logoutShow,
  navScroll,
  hamburgerGen,
} from "./utils.js";
import { GET, GET2 } from "./api.js";

var favLista = JSON.parse(localStorage["favList"]);
const favListSec = qS(".favorites");

favLista.forEach((item) => {
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
      hamburgerGen(
        "Logout",
        ".hamburger",
        "../../index.html",
        "../signed-html/favorites.html",
        "../signed-html/cult.html"
      );
    });
});
