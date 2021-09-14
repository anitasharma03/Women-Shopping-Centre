var register_email = document.querySelector(".register-email");
var register_password = document.querySelector(".register-password");
var register_repeat_password = document.querySelector(
  ".register-repeat-password"
);
var register_btn = document.querySelector(".register-btn");

function register() {
  if (register_password.value === register_repeat_password.value) {
    localStorage.setItem(register_email.value, register_password.value);
    alert("Your account has been registered");
    window.open("login.html");
  } else {
    alert("Passwords does not match!!");
  }
}

register_btn.addEventListener("click", register);
