let inicio = () => {
  let lista = document.getElementById("li1");  
  lista.innerHTML = "";
  fetch("https://jservice.io/api/clues")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error: No se pudo obtener los datos");
      }
      return respuesta.json();
    })
    .then((json) => {
      json.forEach((el) => {
        // Crear elemento para categoría
        let categoria = document.createElement("li");
        categoria.innerHTML = "Categoría: " + el.category.title;

        // Crear lista para detalles de categoría
        let lista2 = document.createElement("ul");
        for (let i in el.category) {
          let fila = document.createElement("li");
          fila.innerHTML = i + ": " + el.category[i];
          lista2.appendChild(fila);
        }
        categoria.appendChild(lista2);
        lista.appendChild(categoria);

        // Crear elemento para pregunta
        let pregunta = document.createElement("li");
        pregunta.innerHTML = "Pregunta: " + el.question;
        lista.appendChild(pregunta);

        // Crear elemento para respuesta
        let respuesta = document.createElement("li");
        respuesta.innerHTML = "Respuesta: " + el.answer;
        lista.appendChild(respuesta);
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
};

window.addEventListener("DOMContentLoaded", inicio);
