document.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault();

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

if(
username === "admin" &&
password === "afrovecteur2026"
){

window.location.href =
"dashboard.html";

}else{

alert(
"Nom d'utilisateur ou mot de passe incorrect"
);

}

});
