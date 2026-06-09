const container =
document.getElementById("projectsContainer");

container.innerHTML = `
<div class="card">
<img src="../images/fsk-cover.jpg" alt="Fondation Syntiche Kaja">

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
<img src="../images/lecoq-cover.jpg" alt="Savon Le Coq">

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

const addBtn =
document.getElementById("addProjectBtn");

addBtn.addEventListener("click", () => {

const titre =
prompt("Titre du projet :");

if(!titre) return;

const categorie =
prompt("Catégorie :");

const description =
prompt("Description :");

const card =
document.createElement("div");

card.className = "card";

card.innerHTML = `
<h2>${titre}</h2>

<span class="badge">
${categorie}
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

});
