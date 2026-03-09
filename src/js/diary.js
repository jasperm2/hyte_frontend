import '../css/style.css';
import '../css/mobile.css';
import '../css/diary-card.css';

import { getEntries } from './entries.js';
import { getMe } from './users.js';

// Päivitetään käyttäjän nimi navigaatioon
const updateUserName = async () => {
  const user = await getMe();
  const nameSpan = document.querySelector('.username');
  if (user && !user.error) {
    nameSpan.textContent = user.username;
    localStorage.setItem('name', user.username);
  } else {
    nameSpan.textContent = 'Vieras (kirjaudu sisään)';
  }
};

const getEntriesBtn = document.querySelector('.get_entries');
getEntriesBtn.addEventListener('click', getEntries);

const addBtn = document.getElementById("addEntryBtn");
const form = document.getElementById("entryForm");

addBtn.addEventListener("click", () => {
  form.style.display = "block";
});

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

  const response = await fetch("http://127.0.0.1:3000/api/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify(entry)
  });

  if (response.ok) {
    loadEntries();
  }
});

async function loadEntries() {
  const token = localStorage.getItem("token");

  const response = await fetch("http://127.0.0.1:3000/api/entries", {
    headers: {
      "Authorization": "Bearer " + token
    }
  });

  const entries = await response.json();

  const container = document.getElementById("entriesContainer");
  container.innerHTML = "";
};

// Suoritetaan heti latauksessa
updateUserName();
loadEntries();
