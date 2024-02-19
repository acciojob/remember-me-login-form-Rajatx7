//your JS code here. If required.
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
    alert(`Logged in as .`);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    alert(`Logged in as .`);
  }
});

if(localStorage.getItem("username")){
    // const node = document.createElement("li");
    // const textnode = document.createTextNode("Water");
    // node.appendChild(textnode);
    // document.getElementById("myList").appendChild(node);
    form.innerHTML += "<button id='existing'>Login as existing user.</button>"    
}

var msg = document.getElementById("existing");
msg.addEventListener("click",()=>{
     alert(`Logged in as .`);
})