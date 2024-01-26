let inicio = () => {
  fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
      .then((respuesta) => {
          if (!respuesta.ok) {
              throw new Error("Error: No se pudo obtener los datos");
          }
          return respuesta.json();
      })
      .then((json) => {
          mostrarDatos(json);
      })
      .catch((error) => {
          console.error(error.message);
      });
};

let mostrarDatos = (json) => {
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
          listItem.textContent = power;
          powersList.appendChild(listItem);
      });

      contenedor.appendChild(document.createElement("p").appendChild(powersList));
      section.appendChild(contenedor);
  });
};

window.addEventListener("DOMContentLoaded", inicio);
