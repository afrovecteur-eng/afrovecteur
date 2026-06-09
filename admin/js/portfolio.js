const container = document.getElementById("projectsContainer");

fetch("/data/portfolio/projets.json")
  .then(response => response.json())
  .then(projets => {

    let html = "";

    projets.forEach(projet => {

      html += `
        <div class="card">

          <img src="${projet.image}" alt="${projet.titre}" width="200">

          <h2>${projet.titre}</h2>

          <p>${projet.categorie}</p>

          <p>${projet.description}</p>

        </div>
      `;

    });

    container.innerHTML = html;

  })
  .catch(error => {

    container.innerHTML =
      "<p>Erreur de chargement des projets.</p>";

    console.error(error);

  });
