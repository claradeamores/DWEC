let inicio = () => {
  let contenido = document.getElementById("contenido");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  const body = JSON.stringify({
    title: "Nueva entrada",
    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, delectus?",
    userId: 1001,
  });
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(JSON.parse(xhr.responseText));
      cargaContenido();
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  });
  xhr.send(body);
  function cargaContenido() {
    let json = JSON.parse(body);
    contenido.innerHTML =
      "<h1>Título: " +
      json.title +
      "</h1><p>Cuerpo: " +
      json.body +
      "</p><p>UserId: " +
      json.userId +
      "</p>";
  }
};
window.addEventListener("DOMContentLoaded", inicio);
