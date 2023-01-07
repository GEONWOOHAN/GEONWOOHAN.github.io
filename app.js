const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);