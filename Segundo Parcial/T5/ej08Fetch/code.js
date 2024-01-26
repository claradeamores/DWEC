let contenido;

let inicio = () => {
  contenido = document.getElementById("contenido");
  mostrarResultados();
};

let mostrarResultados = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}, ${response.statusText}`);
      }
      return response.json();
    })
    .then((json) => {
      let resultados = json.results;
      resultados.forEach((element, index) => {
        let divResultado = crearDivResultado(element, index);
        contenido.appendChild(divResultado);
      });
    })
    .catch((error) => {
      console.error("Error en la operación asíncrona:", error);
    });
};

let cambiarIndividual = (e) => {
  e.preventDefault();
  let index2 = e.target.parentNode.id;
  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error: No se pudo obtener los datos");
      }
      return response.json();
    })
    .then((json) => {
      let resultados2 = json.results[0];
      let divResultado2 = document.getElementById(index2);

      // Reutilizar la función crearDivResultado
      let nuevoBoton = crearDivResultado(resultados2, index2);

      divResultado2.setAttribute("class", "cambiar");
      divResultado2.innerHTML = ''; // Limpiar el contenido existente

      divResultado2.appendChild(nuevoBoton);
    })
    .catch((error) => {
      console.error("Error en la operación asíncrona:", error);
    });
};

function crearDivResultado(element, index) {
  let divResultado = document.createElement("div");
  divResultado.id = index;
  divResultado.innerHTML =
    `<p>Nombre: ${element.name.first} ${element.name.last}</p>` +
    `<p>Email: ${element.email}</p>` +
    `<p>Ciudad: ${element.location.city}</p>` +
    `<img src='${element.picture.large}' alt='Foto persona'>`;

  let espacio = document.createElement("br");
  divResultado.appendChild(espacio);

  let boton = document.createElement("button");
  boton.innerHTML = "CAMBIAR";
  divResultado.appendChild(boton);
  divResultado.setAttribute("class", "cambiar");
  boton.addEventListener("click", cambiarIndividual);

  return divResultado;
}

window.addEventListener("DOMContentLoaded", inicio);
