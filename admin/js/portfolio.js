const container = document.getElementById("projectsContainer");

fetch("/data/portfolio/projets.json")
  .then(response => response.json())
  .then(projets => {

    let html = "";

    projets.forEach((projet, index) => {

      html += `
        <div class="card">

          <img src="${projet.image}" alt="${projet.titre}">

          <h2>${projet.titre}</h2>

          <span class="badge">
            ${projet.categorie}
          </span>

          <p>
            ${projet.description}
          </p>

          <div class="actions">

            <button class="edit-btn"
            onclick="modifierProjet(${index})">
              Modifier
            </button>

            <button class="delete-btn"
            onclick="supprimerProjet(${index})">
              Supprimer
            </button>

          </div>

        </div>
      `;
    });

    container.innerHTML = html;
  });

function modifierProjet(id) {
  alert("Modification du projet #" + id);
}

function supprimerProjet(id) {

  if(confirm("Supprimer ce projet ?")) {

    alert("Projet #" + id + " supprimé");

  }
}
