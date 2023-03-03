import {
  qS,
  movieDetailsGeneration,
  navScroll,
  hamburgerGen,
} from "./utils.js";
import { GET2 } from "./api.js";

const home = qS(".selected-movie");
const id = localStorage.getItem("idMovie");

GET2("movie", `${id}`)
  .then((data) => {
    console.log(data);
    home.appendChild(movieDetailsGeneration(data, "appendChild"));
  })
  .then(() => {
    navScroll();
    hamburgerGen(
      "Accedi",
      ".hamburger",
      "../unsigned-html/login.html",
      "../unsigned-html/favorites.html",
      "../unsigned-html/cult.html"
    );
  });
