let inicio = () => {
  contenido = document.getElementById("contenido");
  mostrarResultados();
};

var contenido;

let mostrarResultados = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://randomuser.me/api/?results=10", true);
  xhr.addEventListener("load", () => {
    try {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("éxito");
        let json = JSON.parse(xhr.responseText);
        let resultados = json.results;
        resultados.forEach((element, index) => {
          let divResultado = crearDivResultado(element, index);
          contenido.appendChild(divResultado);
        });
      } else {
        console.log("error");
        let message = xhr.statusText || "Ocurrió un error";
        console.log(`Error ${xhr.status}: ${message}`);
      }
      console.log("Este mensaje cargará de cualquier forma");
    } catch (error) {
      console.error("Error en la operación asincrónica:", error);
    }
  });
  xhr.send();
};

let crearDivResultado = (element, index) => {
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
};

let cambiarIndividual = (e) => {
  try {
    e.preventDefault();
    let index = e.target.parentNode.id;
    fetch("https://randomuser.me/api/")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error: No se pudo obtener los datos");
        }
        return respuesta.json();
      })
      .then((json) => {
        let resultados = json.results[0];
        let divResultado = document.getElementById(index);
        divResultado.innerHTML =
          "<p>Nombre: " +
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
        let espacio = document.createElement("br");
        divResultado.appendChild(espacio);
        let nuevoBoton = document.createElement("button");
        nuevoBoton.innerHTML = "CAMBIAR";
        nuevoBoton.addEventListener("click", cambiarIndividual);
        divResultado.appendChild(nuevoBoton);
      });
  } catch (error) {
    console.error("Error en la operación asincrónica:", error);
  }
};

window.addEventListener("DOMContentLoaded", inicio);
