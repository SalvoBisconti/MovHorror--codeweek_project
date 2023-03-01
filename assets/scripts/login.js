import { qS, cE, qSA } from "./utils.js";

const form = qS("#loginForm");

const data = [
  {
    username: "salvo",
    password: "ciao",
  },
];

const login = () => {
  const username = qS("#username").value;
  const password = qS("#password").value;
  for (var i = 0; i < data.length; i++) {
    if (username == data[i].username && password == data[i].password) {
      window.open("../signed-html/index.html");
      break;
    } else {
      alert("Dati inseriti non corretti");
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  login();
});
