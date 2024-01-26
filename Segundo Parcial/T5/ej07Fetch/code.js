/*Obtener aleatoriamente datos de un usuario haciendo peticiones ajax sobre la api: 
https://randomuser.me/api/
Necesitamos conocer: el nombre y apellidos, su correo y su ciudad. 
Además queremos ver su imagen.
Crear un botón en html y una capa div. 
Cuando pulsemos el botón, mostraremos la información del usuario en la
capa. Hacerlo con fetch y promesas*/
let contenido; 

let inicio = () => {
  contenido = document.getElementById("contenido");
  document.getElementById("b1").addEventListener("click", mostrarAleatorio);
};

let mostrarAleatorio = () => {
  fetch("https://randomuser.me/api/")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error al obtener usuario");
      }
      return respuesta.json();
    })
    .then((json) => {
      let resultados = json.results[0];
      actualizarContenido(resultados);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

let actualizarContenido = (resultados) => {
  contenido.innerHTML =
    "<p>Nombre " +
    resultados.name.first +
    " " +
    resultados.name.last +
    "</p><p>Email: " +
    resultados.email +
    "</p><p>Ciudad: " +
    resultados.location.city +
    "</p><img src='" +
    resultados.picture.large +
    "' alt='Foto persona'>";
};

window.addEventListener("DOMContentLoaded", inicio);
