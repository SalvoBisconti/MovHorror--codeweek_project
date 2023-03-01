import {
  qS,
  movieDetailsGeneration,
  logoutShow,
  addFavoriteSelectioned,
  navScroll,
  hamburgerGen,
} from "./utils.js";
import { GET2 } from "./api.js";

const home = qS(".selected-movie");
const id = localStorage.getItem("idMovie");

GET2("movie", `${id}`)
  .then((data) => {
    home.appendChild(movieDetailsGeneration(data));
  })
  .then(() => {
    logoutShow();
    addFavoriteSelectioned();
    navScroll();
    hamburgerGen(
      "Logout",
      ".hamburger",
      "../../index.html",
      "../signed-html/favorites.html",
      "../signed-html/cult.html"
    );
  });
