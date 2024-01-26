let contenido;

let inicio = () => {
  contenido = document.getElementById("contenido");
  mostrarResultados();
};

async function mostrarResultados() {
  try {
    const respuesta = await fetch("https://randomuser.me/api/?results=10");

    if (!respuesta.ok) {
      console.error(`Error en la solicitud: ${respuesta.status}, ${respuesta.statusText}`);
      return;
    }

    const json = await respuesta.json();
    let resultados = json.results;

    resultados.forEach((element, index) => {
      let divResultado = crearDivResultado(element, index);
      contenido.appendChild(divResultado);
    });
  } catch (error) {
    console.error("Error en la operación asíncrona:", error);
  }
}

async function cambiarIndividual(e) {
  try {
    e.preventDefault();
    let index2 = e.target.parentNode.id;
    const respuesta = await fetch("https://randomuser.me/api/");
    
    if (!respuesta.ok) {
      console.error(`Error en la solicitud: ${respuesta.status}, ${respuesta.statusText}`);
      return;
    }

    let json = await respuesta.json();
    let resultados2 = json.results[0];
    let divResultado2 = document.getElementById(index2);
    let nuevoBoton = document.createElement("button");

    divResultado2.setAttribute("class", "cambiar");
    nuevoBoton.innerHTML = "CAMBIAR";
    nuevoBoton.addEventListener("click", cambiarIndividual);

    divResultado2.innerHTML =
      "<p>Nombre: " +
      resultados2.name.first +
      " " +
      resultados2.name.last +
      "</p><p>Email: " +
      resultados2.email +
      "</p><p>Ciudad: " +
      resultados2.location.city +
      "</p><img src='" +
      resultados2.picture.large +
      "' alt='Foto persona'>";

    let espacio2 = document.createElement("br");
    divResultado2.appendChild(espacio2);
    divResultado2.appendChild(nuevoBoton);
  } catch (error) {
    console.error("Error en la operación asíncrona:", error);
  }
}

function crearDivResultado(element, index) {
  let divResultado = document.createElement("div");
  divResultado.id = index;
  divResultado.innerHTML =
    "<p>Nombre: " +
    element.name.first +
    " " +
    element.name.last +
    "</p><p>Email: " +
    element.email +
    "</p><p>Ciudad: " +
    element.location.city +
    "</p><img src='" +
    element.picture.large +
    "' alt='Foto persona'>";
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
