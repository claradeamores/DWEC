let inicio = () => {
  obtenerHeroes();
};

let obtenerHeroes = async () => {
  try {
      const response = await fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");

      if (!response.ok) {
          throw new Error(response.status + ", " + response.statusText);
      }

      const json = await response.json();
      let header = document.getElementById("header");
      let section = document.getElementById("section");

      if (!header || !section) {
          console.error("No se encontraron elementos en el DOM");
          return;
      }

      header.innerHTML =
          "<h1>" +
          json.squadName +
          "</h1><p>Hometown: " +
          json.homeTown +
          " // Formed: " +
          json.formed +
          "</p>";

      let miembros = json.members;
      miembros.forEach((miembro) => {
          let contenedor = document.createElement("div");
          contenedor.innerHTML =
              "<h2>" +
              miembro.name +
              "</h2><p>Secret Identity: " +
              miembro.secretIdentity +
              "</p><p>Age: " +
              miembro.age +
              "</p>";

          let powersList = document.createElement("ul");
          miembro.powers.forEach((power) => {
              let listItem = document.createElement("li");
              listItem.innerHTML = power;
              powersList.appendChild(listItem);
          });

          contenedor.appendChild(document.createElement("p").appendChild(powersList));
          section.appendChild(contenedor);
      });
  } catch (error) {
      console.error(error.message);
  }
};

window.addEventListener("DOMContentLoaded", inicio);
