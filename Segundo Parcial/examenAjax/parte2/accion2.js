let inicio = () => {
  document.getElementById("b1").addEventListener("click", cargarPersonajes);
};

let cargarPersonajes = (e) => {
  e.preventDefault();
  let contenedor = document.getElementById("charactersContainer");
  contenedor.innerHTML="";
  fetch(" https://rickandmortyapi.com/api/character/")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener los datos");
      }
      return respuesta.json();
    })
    .then((json) => {
      let personajes = json.results;
      let divPrincipal = document.createElement("div");
      divPrincipal.setAttribute("class", "character-row");
      personajes.forEach((personaje) => {
        let divPersonaje = document.createElement("div");
        divPersonaje.setAttribute("class", "character-container");
        let imagen = document.createElement("img");
        imagen.src = personaje.image;
        imagen.setAttribute("class", "character-image");
        divPersonaje.appendChild(imagen);
        divPrincipal.appendChild(divPersonaje);
        let info = document.createElement("div");
        info.setAttribute("class", "character-info");
        divPersonaje.appendChild(info);
        let episodiosTotales =personaje.episode.length;
        info.innerHTML =
          "<p><strong>ID:</strong> " +
          personaje.id +
          "</p><p><strong>Nombre:</strong> " +
          personaje.name +
          "</p><p><strong>Estado:</strong> " +
          personaje.status +
          "</p><p><strong>Especie:</strong> " +
          personaje.species +
          "</p><p><strong>Total de episodios:</strong> " +
          episodiosTotales +
          "</p>";
      });
      contenedor.appendChild(divPrincipal);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};
window.addEventListener("DOMContentLoaded", inicio);
