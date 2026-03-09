import '../css/style.css';
import '../css/mobile.css';
import '../css/diary-card.css';

import { getMe } from './users.js';

const API = "http://127.0.0.1:3000/api/entries";

const container = document.getElementById("entriesContainer");
const form = document.getElementById("entryForm");
const addBtn = document.getElementById("addEntryBtn");


// käyttäjän nimi navigaatioon
const updateUserName = async () => {
  const user = await getMe();
  const nameSpan = document.querySelector('.username');

  if (user && !user.error) {
    nameSpan.textContent = user.username;
  } else {
    nameSpan.textContent = 'Vieras';
  }
};


// hae merkinnät tietokannasta
async function loadEntries() {

  const token = localStorage.getItem("token");

  const response = await fetch(API,{
    headers:{
      "Authorization":"Bearer " + token
    }
  });

  const entries = await response.json();



  container.innerHTML = "";

  if (!entries || entries.length === 0) return;

  entries.forEach(entry => {

    const card = document.createElement("div");
    card.classList.add("diary-card");
    const date = new Date(entry.entry_date).toLocaleDateString("fi-FI");

    card.innerHTML = `
      <h3>${date}</h3>
      <p><b>Mieliala:</b> ${entry.mood ?? "-"}</p>
      <p><b>Paino:</b> ${entry.weight ?? "-"}</p>
      <p><b>Uni:</b> ${entry.sleep_hours ?? "-"} h</p>
      <p>${entry.notes ?? ""}</p>
    `;

    container.appendChild(card);
  });

}


// näytä formi
addBtn.addEventListener("click", () => {
  form.style.display = "block";
});


// uusi merkintä
form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const token = localStorage.getItem("token");

  const entry = {
    entry_date: document.getElementById("entry_date").value,
    mood: document.getElementById("mood").value,
    weight: document.getElementById("weight").value,
    sleep_hours: document.getElementById("sleep_hours").value,
    notes: document.getElementById("notes").value
  };

  const response = await fetch(API,{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer " + token
    },
    body:JSON.stringify(entry)
  });

  if(response.ok){

    form.reset();
    form.style.display="none";

    loadEntries();
  }
});


// alustus
updateUserName();
loadEntries();
