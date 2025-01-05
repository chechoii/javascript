const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked!!!");
}

loginForm.addEventListener("submit", onLoginSubmit);
