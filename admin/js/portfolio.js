const container =
document.getElementById("projectsContainer");

function saveProjects() {

localStorage.setItem(
"portfolioProjects",
container.innerHTML
);

}

const savedProjects =
localStorage.getItem(
"portfolioProjects"
);

if(savedProjects){

container.innerHTML =
savedProjects;

}else{

container.innerHTML = `
<div class="card">
<img src="../images/fsk-cover.jpg">

<h2>Fondation Syntiche Kaja</h2>

<span class="badge">
Branding
</span>

<p>
Création de la charte graphique complète.
</p>

<div class="actions">
<button class="edit-btn">
Modifier
</button>

<button class="delete-btn">
Supprimer
</button>
</div>
</div>

<div class="card">
<img src="../images/lecoq-cover.jpg">

<h2>Savon Le Coq</h2>

<span class="badge">
Packaging
</span>

<p>
Conception du packaging du savon.
</p>

<div class="actions">
<button class="edit-btn">
Modifier
</button>

<button class="delete-btn">
Supprimer
</button>
</div>
</div>
`;

}

const modal =
document.getElementById("projectModal");

const addBtn =
document.getElementById("addProjectBtn");

const closeBtn =
document.getElementById("closeModal");

const saveBtn =
document.getElementById("saveProject");

addBtn.addEventListener("click", () => {

modal.style.display = "flex";

});

closeBtn.addEventListener("click", () => {

modal.style.display = "none";

});

saveBtn.addEventListener("click", () => {

const title =
document.getElementById("projectTitle").value;

const category =
document.getElementById("projectCategory").value;

const description =
document.getElementById("projectDescription").value;

const imageInput =
document.getElementById("projectImage");

const imageFile =
imageInput.files[0];  

if(
title === "" ||
category === "" ||
description === ""
){
alert("Veuillez remplir tous les champs");
return;
}

if(imageFile){

const reader =
new FileReader();

reader.onload = function(event){

const card =
document.createElement("div");

card.className = "card";

card.innerHTML = `
<img src="${event.target.result}">

<h2>${title}</h2>

<span class="badge">
${category}
</span>

<p>
${description}
</p>

<div class="actions">
<button class="edit-btn">
Modifier
</button>

<button class="delete-btn">
Supprimer
</button>
</div>
`;

container.appendChild(card);

saveProjects();

};

reader.readAsDataURL(imageFile);

}else{

const card =
document.createElement("div");

card.className = "card";

card.innerHTML = `
<h2>${title}</h2>

<span class="badge">
${category}
</span>

<p>
${description}
</p>

<div class="actions">
<button class="edit-btn">
Modifier
</button>

<button class="delete-btn">
Supprimer
</button>
</div>
`;

container.appendChild(card);

saveProjects();

}

saveProjects();

modal.style.display = "none";

document.getElementById("projectTitle").value = "";
document.getElementById("projectCategory").value = "";
document.getElementById("projectDescription").value = "";
document.getElementById("projectImage").value = "";  

});

document.addEventListener(
"click",
function(e){

if(
e.target.classList.contains(
"delete-btn"
)
){

e.target
.closest(".card")
.remove();

saveProjects();

}

}
);
