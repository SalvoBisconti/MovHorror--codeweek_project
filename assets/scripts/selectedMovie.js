import {
  qS,
  movieDetailsGeneration,
  logoutShow,
  addFavoriteSelectioned,
  navScroll,
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
  });
