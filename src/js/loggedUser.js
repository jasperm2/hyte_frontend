
// Ottaa getMe funktion users.js
import { getMe } from "./users.js";

// Päivittää navbarissa olevan nimen
const updateUserName = async () => {

  // HTML elementti jossa käyttäjän nimi näytetään
  const nameElem = document.querySelector(".username");

    //Jos ei löydy, lopetetaan
    if (!nameElem) return;

    // localStoragesta kirjautumis token
    const token = localStorage.getItem("token");

    // tokenia ei ole niin käyttäjä on vieras
    if (!token) {
      nameElem.textContent = "Vieras";
      return;
  }
  // backendistä käyttäjän tiedot
  const user = await getMe();
  
  if (user && !user.error) {
    nameElem.textContent = user.username;
  } else {
    nameElem.textContent = "Vieras";
  }

};

updateUserName();
