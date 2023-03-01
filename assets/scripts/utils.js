const cE = (element) => document.createElement(element);
const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);

let favoriteArray = [];
if (!localStorage["favList"]) {
  localStorage["favList"] = localStorage["favList"] = JSON.stringify([]);
}
let favExist = JSON.parse(localStorage.getItem("favList"));
if (favExist == null) favExist = [];

const navScroll = () => {
  const navbar = qS(".header");
  window.onscroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };
};

const hamburgerGen = (text, classHam, linkLogin, linkFav, linkCult) => {
  const menulist = cE("div");
  const modal = qS(".mobile");

  const signin = cE("a");
  const favorite = cE("a");
  const cult = cE("a");

  menulist.className = "menu-list";
  signin.textContent = text;
  favorite.textContent = "Preferiti";
  cult.textContent = "Cult";

  signin.href = linkLogin;
  favorite.href = linkFav;
  cult.href = linkCult;

  menulist.append(signin, favorite, cult);
  modal.appendChild(menulist);
  const menu = qS(classHam);
  menu.addEventListener("click", () => {
    modal.classList.toggle("unshow");
  });

  return menulist;
};

const movieGenerator = (data, typeImg, classImg) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const link = cE("a");
  const favEl = cE("div");
  const favImg = cE("img");
  const link2 = cE("a");

  cardEl.setAttribute("id", data.id);
  favImg.setAttribute("id", data.id);
  cardEl.className = "movie";
  imgEl.src = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
  imgEl.alt = data.title;
  imgEl.className = "movie-img";
  link.href = "./selectedMovie.html";
  link2.href = "./selectedMovie.html";
  link.className = "link-movie-1";
  link2.className = "link-movie-2";
  favEl.className = "addFavorite";
  favImg.className = `${classImg}`;
  favImg.src = `${typeImg}`;

  favEl.appendChild(favImg);
  cardEl.append(imgEl, favEl, link, link2);
  return cardEl;
};
const favoriteGenerator = (data, typeImg, classImg) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const link = cE("a");
  const favEl = cE("div");
  const favImg = cE("img");
  const link2 = cE("a");

  cardEl.setAttribute("id", data.id);
  favImg.setAttribute("id", data.id);
  cardEl.className = "movie";
  imgEl.src = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
  imgEl.alt = data.title;
  imgEl.className = "movie-img";
  link.href = "./selectedMovie.html";
  link2.href = "./selectedMovie.html";
  link.className = "link-movie-1";
  link2.className = "link-movie-2";
  favEl.className = "addFavorite";
  favImg.className = `${classImg}`;
  favImg.src = `${typeImg}`;

  favImg.addEventListener("click", () => {
    removeFavorite(favImg);
  });

  favEl.appendChild(favImg);
  cardEl.append(imgEl, favEl, link, link2);
  return cardEl;
};
const movieGeneratorNotSigned = (data, appOrCult) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const link = cE("a");
  const link2 = cE("a");
  cardEl.setAttribute("id", data.id);
  cardEl.className = "movie";
  imgEl.src = `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`;
  imgEl.alt = data.title;
  imgEl.className = "movie-img";
  link.href = `${appOrCult}`;
  link2.href = `${appOrCult}`;
  link.className = "link-movie-1";
  link2.className = "link-movie-2";

  cardEl.append(imgEl, link, link2);
  return cardEl;
};

const heroChange = (data, linkAreSigned) => {
  const heroImg = qS(".hero-img");
  const hero = qS(".hero");
  const firstButtonEl = qS(".frt_button");
  const secondButtonEl = qS(".scn_button");
  const thirdButtonEl = qS(".trd_button");
  const info = cE("div");
  const title = cE("h1");
  const general = cE("div");
  const year = cE("h3");
  const producer = cE("h3");
  const overview = cE("p");
  const infoBtn = cE("a");
  const leftSlider = qS(".slide-left");
  const rightSlider = qS(".slide-right");

  let sliderState = 0;
  const heroImgSlider = [
    `https://image.tmdb.org/t/p/original${data[0].results[0].backdrop_path}`,
    `https://image.tmdb.org/t/p/original${data[0].results[1].backdrop_path}`,
    `https://image.tmdb.org/t/p/original${data[0].results[2].backdrop_path}`,
  ];
  const date = data[0].results[0].release_date.split("-", 4);
  info.className = "info-hero";
  title.className = "title-hero";
  infoBtn.className = "hero-infoBtn";
  infoBtn.setAttribute("id", data[0].results[0].id);
  localStorage.setItem("idMovie", data[0].results[0].id);
  title.textContent = `${data[0].results[0].original_title}`;
  overview.textContent = `${data[0].results[0].overview}`;
  year.textContent = `Data uscita: ${date[0]}`;
  infoBtn.textContent = "Maggiori info";
  infoBtn.href = `${linkAreSigned}`;
  heroImg.src = heroImgSlider[0];

  rightSlider.addEventListener("click", () => {
    const date = data[0].results[sliderState].release_date.split("-", 4);
    heroImg.src = heroImgSlider[sliderState];
    infoBtn.setAttribute("id", data[0].results[sliderState].id);
    localStorage.setItem("idMovie", data[0].results[sliderState].id);

    title.textContent = `${data[0].results[sliderState].original_title}`;
    overview.textContent = `${data[0].results[sliderState].overview}`;
    year.textContent = `Data uscita: ${date[0]}`;
    sliderState++;
    if (sliderState > 2) {
      sliderState = 0;
    }
  });

  leftSlider.addEventListener("click", () => {
    const date = data[0].results[sliderState].release_date.split("-", 4);

    heroImg.src = heroImgSlider[sliderState];
    title.textContent = `${data[0].results[sliderState].original_title}`;
    overview.textContent = `${data[0].results[sliderState].overview}`;
    year.textContent = `Data uscita: ${date[0]}`;
    sliderState--;
    if (sliderState < 0) {
      sliderState = 2;
    }
  });
  general.append(year), producer;
  info.append(title, general, overview, infoBtn);
  hero.appendChild(info);
  return info;
};

const details = () => {
  const movies = qSA(".movie");
  movies.forEach((movie) =>
    movie.addEventListener("click", () => {
      localStorage.setItem("idMovie", movie.id);
    })
  );
};

const movieDetailsGeneration = (data, text = "append") => {
  const detailEl = cE("div");
  const main = cE("div");
  const titleDiv = cE("div");
  const overlay = cE("div");
  const title = cE("h2");
  const addFavEl = cE("img");
  const overview = cE("p");
  const info = cE("div");
  const voteAverage = cE("p");
  const country = cE("p");
  const relaseData = cE("p");
  const languagesEl = cE("p");
  const btnsEl = cE("div");
  const playBtn = cE("button");
  const trailerBtn = cE("button");
  const countries = data.production_countries.map((item) => item.name);
  const languages = data.spoken_languages.map((item) => item.name);

  const date = data.release_date.split("-", 4);
  addFavEl.setAttribute("id", data.id);

  detailEl.className = "detailsMovie";
  titleDiv.className = "title-sec";
  overlay.className = "overlay";
  country.className = "country";
  relaseData.className = "relase-data";
  overview.className = "overview";
  btnsEl.className = "btn-area";
  playBtn.className = "play-btn";
  trailerBtn.className = "trailer-btn";
  addFavEl.className = "addFavSelected-img";
  detailEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`;
  title.textContent = `${data.original_title}`;
  overview.textContent = `${data.overview}`;
  voteAverage.textContent = `${data.vote_average.toFixed(1)}`;
  relaseData.textContent = `Anno di uscita: ${date[0]}`;
  playBtn.textContent = " ► GUARDA ORA";
  trailerBtn.textContent = "TRAILER";
  country.textContent = `Paesi di produzione: ${countries}`;
  languagesEl.textContent = `Lingua originale: ${languages}`;
  addFavEl.src = "../img/add-fav.png";
  info.className = "general";
  title.className = "title";
  main.className = "main-details";
  voteAverage.className = "vote";
  btnsEl.append(playBtn, trailerBtn);
  info.append(voteAverage, country, relaseData, languagesEl);
  titleDiv[`${text}`](title, addFavEl);
  main.append(titleDiv, info, overview, btnsEl);
  detailEl.appendChild(main);
  return detailEl;
};

const addFavoriteFunc = () => {
  const stars = qSA(".add-fav-imgIndex");
  stars.forEach((star) =>
    star.addEventListener("click", () => {
      let list = JSON.parse(localStorage.getItem("favList"));
      let listToOneArray = list.flat(1);
      let thereIs = listToOneArray.includes(star.id);
      if (thereIs === false) {
        favoriteArray.push(star.id);
        localStorage["newFav"] = JSON.stringify(favoriteArray);
        favoriteArray.forEach((item) => {
          if (!favExist.includes(item)) {
            favExist.push(item);
            window.location.reload();
          }
        });
        localStorage["favList"] = JSON.stringify(favExist);
        alert("Il film è stato aggiunto nella lista favoriti");
      } else {
        alert("Il film è già presente nelle lista favoriti");
      }
    })
  );
};

const addFavoriteSelectioned = () => {
  const btn = qS(".addFavSelected-img");
  btn.addEventListener("click", () => {
    let list = JSON.parse(localStorage.getItem("favList"));
    let listToOneArray = list.flat(1);
    let thereIs = listToOneArray.includes(btn.id);
    if (thereIs === false) {
      alert("Il film è stato aggiunto nella lista favoriti");
      btn.src = "../img/added.png";
      favoriteArray.push(btn.id);
      localStorage["newFav"] = JSON.stringify(favoriteArray);
      favExist.push(favoriteArray);
      localStorage["favList"] = JSON.stringify(favExist);
    } else {
      alert("Il film è già presente nelle lista favoriti");
    }
  });
};

const slider = (list, right, left) => {
  const leftSlider = qS(`${left}`);
  const rightSlider = qS(`${right}`);
  const movieList = qS(`${list}`);
  let mostViewedScroll = 0;

  rightSlider.addEventListener("click", () => {
    movieList.scrollLeft += 1200;
  });

  leftSlider.addEventListener("click", () => {
    movieList.scrollLeft -= 1200;
  });
};

const removeFavorite = (element) => {
  const popUp = confirm(
    "Sei sicuro di voler rimuovere il film dalla lista preferiti?"
  );
  if (popUp === true) {
    let oldList = JSON.parse(localStorage.getItem("favList"));
    let oldListToOneArray = oldList.flat(1);
    let index = oldListToOneArray.indexOf(element.id);
    oldListToOneArray.splice(index, 1);
    if (index !== -1) {
      localStorage["favList"] = JSON.stringify(oldListToOneArray);
      location.reload();
      alert("Film corretamente rimosso");
    }
  }
};

const logoutShow = () => {
  const avatar = qS(".avatar-img");
  const logout = qS(".logout");
  const logoutClose = qS(".logout-close");
  const logoutAction = qS(".logout-action");

  avatar.addEventListener("click", () => {
    logout.classList.toggle("logout-show");
  });
  logoutClose.addEventListener("click", () => {
    logout.classList.toggle("logout-show");
  });
  logoutAction.addEventListener("click", () => {
    const popUp = confirm("Vuoi davvere effettuare il logout?");
    if (popUp === true) {
      window.open("../../index.html");
    }
  });
};

export {
  cE,
  qS,
  qSA,
  movieGenerator,
  heroChange,
  details,
  movieDetailsGeneration,
  addFavoriteFunc,
  slider,
  removeFavorite,
  logoutShow,
  movieGeneratorNotSigned,
  addFavoriteSelectioned,
  navScroll,
  favoriteGenerator,
  hamburgerGen,
};
