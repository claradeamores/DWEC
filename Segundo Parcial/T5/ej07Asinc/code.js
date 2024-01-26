/*Obtener aleatoriamente datos de un usuario haciendo peticiones ajax sobre la api: 
https://randomuser.me/api/
Necesitamos conocer: el nombre y apellidos, su correo y su ciudad. 
Además queremos ver su imagen.
Crear un botón en html y una capa div. 
Cuando pulsemos el botón, mostraremos la información del usuario en la
capa. Hacerlo con fetch y promesas*/
let contenido; // Declara la variable contenido fuera de la función inicio.

let inicio = () => {
  contenido = document.getElementById("contenido");
  document.getElementById("b1").addEventListener("click", mostrarAleatorio);
};

async function mostrarAleatorio(e) {
  e.preventDefault();

  try {
    const respuesta = await fetch("https://randomuser.me/api/");

    if (!respuesta.ok) {
      throw new Error(`Error: ${respuesta.status} - ${respuesta.statusText}`);
    }

    const json = await respuesta.json();
    console.log(json);

    let resultados = json.results;
    resultados.forEach((resultado) => {
      contenido.innerHTML =
        "<p>Nombre " +
        resultado.name.first +
        " " +
        resultado.name.last +
        "</p><p>Email: " +
        resultado.email +
        "</p><p>Ciudad: " +
        resultado.location.city +
        "</p><img src='" +
        resultado.picture.large +
        "' alt='Foto persona'>";
    });

  } catch (error) {
    console.error("Error:", error.message);
  }
}

window.addEventListener("DOMContentLoaded", inicio);
