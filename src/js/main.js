import '../css/style.css';
import '../css/mobile.css';


const authBtn = document.querySelector("#auth-btn");
const usernameSpan = document.querySelector(".username");

const token = localStorage.getItem("token");
const username = localStorage.getItem("name");


if (token) {

  // käyttäjä kirjautunut
  usernameSpan.textContent = username;
  authBtn.textContent = "Kirjaudu ulos";

  authBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // poistetaan login
    localStorage.removeItem("token");
    localStorage.removeItem("name");

    // palautetaan etusivulle vieraskäyttäjänä
    window.location.href = "index.html";
  });

} else {

  // vieraskäyttäjä
  usernameSpan.textContent = "Vieras";
  authBtn.textContent = "Kirjaudu sisään";
  authBtn.href = "login.html";

}
