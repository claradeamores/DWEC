let inicio = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
      "GET",
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      true
  );
  xhr.send();

  xhr.addEventListener("load", () => {
      try {
          if (xhr.status >= 200 && xhr.status < 300) {
              console.log("éxito");
              let json = JSON.parse(xhr.responseText);
              let header = document.getElementById("header");
              let section = document.getElementById("section");
              header.innerHTML =
                  "<h1>" +
                  json.squadName +
                  "</h1><p>Hometown: " +
                  json.homeTown +
                  " // Formed: " +
                  json.formed +
                  "</p>";
              let miembros = json.members;

              // Limpiamos la sección antes de agregar los nuevos elementos
              section.innerHTML = "";

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

                  let listaPoderes = document.createElement("ul");
                  miembro.powers.forEach((power) => {
                      let poder = document.createElement("li");
                      poder.innerHTML = power;
                      listaPoderes.appendChild(poder);
                  });

                  contenedor.appendChild(document.createElement("p").appendChild(listaPoderes));
                  section.appendChild(contenedor);
              });
          } else {
              throw new Error(`Error ${xhr.status}: ${xhr.statusText}`);
          }
      } catch (error) {
          console.log("error", error.message);
          let header = document.getElementById("header");
          header.innerHTML = `<p>${error.message}</p>`;
      } 
  });
};

window.addEventListener("DOMContentLoaded", inicio);
