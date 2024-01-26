let inicio = () => {
  document.getElementById("b1").addEventListener("click", resultado);
};

let resultado = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error: No se pudo obtener los datos");
      }
      return respuesta.json();
    })
    .then((datos) => {
      limpiarTabla(); // Limpiar la tabla existente antes de agregar nuevos datos

      let tabla = document.createElement("table");
      tabla.style.border = "2px black solid";
      tabla.style.textAlign = "center";

      let titulo = document.createElement("thead");
      let columnaTitulo = document.createElement("th");
      columnaTitulo.style.border = "2px black solid";
      columnaTitulo.innerHTML = "Título";

      let columnaCuerpo = document.createElement("th");
      columnaCuerpo.innerHTML = "Cuerpo";
      columnaCuerpo.style.border = "2px black solid";

      titulo.appendChild(columnaTitulo);
      titulo.appendChild(columnaCuerpo);
      tabla.appendChild(titulo);

      let cuerpo = document.createElement("tbody");

      datos.forEach((el) => {
        let fila = document.createElement("tr");
        let columna1 = document.createElement("td");
        columna1.style.border = "2px black solid";
        columna1.innerHTML = el.title;

        let columna2 = document.createElement("td");
        columna2.style.border = "2px black solid";
        columna2.innerHTML = el.body;

        fila.appendChild(columna1);
        fila.appendChild(columna2);
        cuerpo.appendChild(fila);
      });

      tabla.appendChild(cuerpo);
      document.body.appendChild(tabla);
    })
    .catch((error) => {
      console.error("Error durante la solicitud o procesamiento de datos:", error);
    });
};

let limpiarTabla = () => {
  // Obtener la tabla existente y eliminarla si existe
  const tablaExistente = document.querySelector("table");
  if (tablaExistente) {
    tablaExistente.remove();
  }
};

window.addEventListener("DOMContentLoaded", inicio);
