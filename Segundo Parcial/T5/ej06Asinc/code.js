let inicio = async () => {
  let contenido = document.getElementById("contenido");
  try {
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        body: JSON.stringify({
          title: "Nueva entrada",
          body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, delectus?",
          userId: 1001,
        }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }
    );

    if (!respuesta.ok) {
      throw new Error("Error en la petición POST");
    }

    const json = await respuesta.json();
    console.log(json);
    contenido.innerHTML =
      "<h1>Título: " +
      json.title +
      "</h1><p>Cuerpo: " +
      json.body +
      "</p><p>UserId: " +
      json.userId+"</p>"+"<p>Id: "+json.id+"</p>";
  } catch (error) {
    console.error("Error:", error.message);
  }
};

window.addEventListener("DOMContentLoaded", inicio);
