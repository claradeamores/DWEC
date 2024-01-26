let inicio = () => {
  document.getElementById("b2").addEventListener("click", yesNo);
};

function yesNo() {
  fetch("https://yesno.wtf/api")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error: No se pudo obtener los datos");
      }
      return respuesta.json();
    })
    .then((json) => {
      let imagen = document.createElement("img");
      imagen.src = json.image;

      // Limpiar contenido anterior de "p2"
      document.getElementById("p2").innerHTML = "";

      // Agregar la nueva imagen al elemento "p2"
      document.getElementById("p2").appendChild(imagen);
    })
    .catch((error) => {
      console.error('Error:', error);
      document.getElementById("p2").innerHTML = "Error al obtener la respuesta";
    });
}

window.addEventListener("DOMContentLoaded", inicio);
