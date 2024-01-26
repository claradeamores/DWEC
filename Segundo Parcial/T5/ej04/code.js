/* Dada la api:  jservice.io/api/clues  , 
mostrar una lista con todas las pistas que aparecen: 
Category, question y
answer. La etiqueta ul está creada en el html, las li no.*/
let inicio = () => {
  let lista = document.getElementById("li1");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jservice.io/api/clues");

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;

    try {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("éxito");
        let clues = JSON.parse(xhr.responseText);

        // Limpiar contenido anterior
        lista.innerHTML = "";

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
      } else {
        console.log("error");
        let message = xhr.statusText || "Ocurrió un error";
        lista.innerHTML = `Error ${xhr.status}: ${message}`;
      }
    } catch (error) {
      console.error("Error:", error);
      lista.innerHTML = "Error al procesar los datos";
    }

    console.log("Este mensaje cargará de cualquier forma");
  });

  xhr.send();
};

window.addEventListener("DOMContentLoaded", inicio);
