var login_email = document.querySelector(".login-email");
var login_password = document.querySelector(".login-password");
var login_btn = document.querySelector(".login-btn");

function login() {
  var check = localStorage.getItem(login_email.value);
  console.log(check);
  if (check === login_password.value) {
    alert("You have successfully loggedIn");
    window.open("home.html");
  } else {
    alert("Wrong username or password");
  }
}
login_btn.addEventListener("click", login);
