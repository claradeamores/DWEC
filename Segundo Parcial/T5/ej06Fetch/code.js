/*6.- Insertar un nuevo post en https://jsonplaceholder.typicode.com/posts. 
El campo id no hace falta que lo indiqueis.
En html tenéis una etiqueta div para poner el conjunto de datos insertados. 
Hacer la petición con Fetch y await.*/
let inicio = () => {
  let contenido = document.getElementById("contenido");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Nueva entrada",
      body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, delectus?",
      userId: 1001,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error: No se pudo obtener los datos");
      }
      return respuesta.json();
    })
    .then((json) => {
      contenido.innerHTML =
        "<h1>Título: " +
        json.title +
        "</h1><p>Cuerpo: " +
        json.body +
        "</p><p>UserId: " +
        json.userId+"</p>"+"<p>Id: "+json.id+"</p>" ;
      console.log(json);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error.message);
    });
};

window.addEventListener("DOMContentLoaded", inicio);

