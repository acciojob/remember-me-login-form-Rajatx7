var username = document.getElementById("username");
var password = document.getElementById("password");
var submit = document.getElementById("submit");
var checkbox = document.getElementById("checkbox");
var form = document.getElementById("loginForm"); 

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkbox.checked) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }
  alert(`Logged in as ${username.value}.`);
  if (localStorage.getItem("username")) {
    if (!document.getElementById("existing")) {
      form.innerHTML += "<button id='existing'>Login as existing user.</button>";
      var msg = document.getElementById("existing");
      msg.addEventListener("click",()=>{
        alert(`Logged in as ${localStorage.getItem('username')}.`);
      });
    }
  }
});