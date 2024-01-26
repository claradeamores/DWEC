let inicio = () => {
  var lista = document.getElementById("li1");

  async function getResponse() {
    try {
      const response = await fetch("https://jservice.io/api/clues");

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      // Limpiar contenido anterior
      lista.innerHTML = "";

      const clues = await response.json();

      clues.forEach((clue) => {
        let categoria = document.createElement("li");
        categoria.innerHTML = "Categoría";
        let listaCategoria = document.createElement("ul");

        for (let key in clue.category) {
          let fila = document.createElement("li");
          fila.innerHTML = key + ": " + clue.category[key];
          listaCategoria.appendChild(fila);
        }

        categoria.appendChild(listaCategoria);
        lista.appendChild(categoria);

        let pregunta = document.createElement("li");
        pregunta.innerHTML = "Pregunta: " + clue.question;
        lista.appendChild(pregunta);

        let respuesta = document.createElement("li");
        respuesta.innerHTML = "Respuesta: " + clue.answer;
        lista.appendChild(respuesta);
      });
    } catch (error) {
      console.error("Error:", error);
      lista.innerHTML = "Error al procesar los datos";
    }
  }

  getResponse();
};

window.addEventListener("DOMContentLoaded", inicio);
