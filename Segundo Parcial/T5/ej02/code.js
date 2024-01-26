/*- Crear una página html con un <H1> POSTS </H1> y un botón. 
Cuando pulsemos un botón vamos a llamar a la
api: jsonplaceholder.typicode.com/posts , y vamos 
a pintar el resultado en una tabla. Sacar en cada fila el title y el
body, cada uno en una columna diferente.*/
let inicio = () => {
  var boton = document.getElementById("b1");
  boton.addEventListener("click", enviarDatos);
};

let enviarDatos = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("éxito");

      let json = JSON.parse(xhr.responseText);
      crearTabla(json);
    } else {
      console.log("error");
      let message = xhr.statusText || "Ocurrió un error";
      console.error(`Error ${xhr.status}: ${message}`);
    }
  });

  xhr.send();
};

let crearTabla = (data) => {
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

  data.forEach((el) => {
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
};

window.addEventListener("DOMContentLoaded", inicio);
