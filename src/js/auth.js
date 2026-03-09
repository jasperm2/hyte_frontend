
// Kommunikointi backendin kanssa, kirjautumispyyntö ja rekisteröityminen
const API_LOGIN = "http://127.0.0.1:3000/api/users/login";
const API_REGISTER = "http://127.0.0.1:3000/api/users";

const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const error = document.getElementById("authError");


// Saadaan klikkaamalla pompittua rekisteröinnin ja kirjautumisen välillä

loginTab.onclick = () => {

  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");

  loginTab.classList.add("active");
  registerTab.classList.remove("active");

  };

  registerTab.onclick = () => {

  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");

  registerTab.classList.add("active");
  loginTab.classList.remove("active");

};



// Kirjautuminen

loginForm.addEventListener("submit", async (e)=>{

  // estää sivun uudelleenlähetys
  e.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // pyyntö backendille
  const res = await fetch(API_LOGIN,{
    method:"POST",
    headers:{ "Content-Type":"application/json" },
    body:JSON.stringify({ username,password })
  });

  const data = await res.json();

  if(!res.ok){
  error.textContent="Väärä käyttäjänimi tai salasana";
  return;
  }

  localStorage.setItem("token",data.token);

  window.location.href="index.html";

});



// Rekisteröinti

registerForm.addEventListener("submit", async (e)=>{

  e.preventDefault();

  const username = document.getElementById("registerUsername").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const res = await fetch(API_REGISTER,{
  method:"POST",
  headers:{ "Content-Type":"application/json" },
  body:JSON.stringify({ username,email,password })
  });

  const data = await res.json();

  if(!res.ok){
  error.textContent=data.message || "Rekisteröinti epäonnistui";
  return;
  }

  error.style.color="green";
  error.textContent="Rekisteröinti onnistui! Voit kirjautua.";

  registerTab.classList.remove("active");
  loginTab.classList.add("active");

  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");

});
