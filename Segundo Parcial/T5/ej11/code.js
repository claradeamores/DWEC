let inicio = () => {
  api = prompt("Indique su apiKey");
  imagen = document.getElementById("imagen");
  fechaHtml = document.getElementById("fecha");
  fechaHoy = new Date().toISOString().split("T")[0];
  obtenerImagen(fechaHoy, api);
  fechaHtml.addEventListener("change", cambiarFecha);
};

var api, fechaHtml, fechaHoy, imagen;

let cambiarFecha = () => {
  apiNueva = prompt("Indique su apiKey");
  fechaHtml = document.getElementById("fecha").value;
  obtenerImagen(fechaHtml, apiNueva);
};

let obtenerImagen = (fecha, apiIn) => {
  const apiDir =
    "https://api.nasa.gov/planetary/apod?api_key=" + apiIn + "&date=" + fecha;
  fetch(apiDir)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error: No se pudo obtener los datos");
      }
      return respuesta.json();
    })
    .then((json) => {
      imagen.innerHTML = "<img src='" + json.url + "' alt='NASA Image'/>"; // Agregado 'alt'      
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

window.addEventListener("DOMContentLoaded", inicio);
