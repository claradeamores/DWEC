async function cargarPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Error al obtener los posts");
  }

  const posts = await response.json();
  mostrarPostsEnTabla(posts);
}

mostrarPostsEnTabla = (posts) => {
  // Crear una tabla en el DOM
  var tabla = document.createElement("table");
  tabla.style.border = "1";

  // Crear la fila de encabezado
  //var encabezado = tabla.createTHead().insertRow();

  const encabezado = document.createElement("tr");

  const enc1 = document.createElement("th");
  const enc2 = document.createElement("th");

  encabezado.appendChild(enc1);
  encabezado.appendChild(enc2);

  //var encabezadoTitle = encabezado.insertCell(0);
  //var encabezadoBody = encabezado.insertCell(1);
  enc1.innerHTML = "<b>Title</b>";
  enc2.innerHTML = "<b>Body</b>";
  tabla.appendChild(encabezado);

  // Agregar cada post como una fila en la tabla
  posts.forEach(function (post) {
    var fila = tabla.insertRow();
    var celdaTitle = fila.insertCell(0);
    var celdaBody = fila.insertCell(1);

    // Agregar datos a las celdas
    celdaTitle.innerHTML = post.title;
    celdaBody.innerHTML = post.body;
  });

  // Mostrar la tabla en el contenedor especificado
  var tablaContainer = document.getElementById("tabla-container");
  tablaContainer.innerHTML = "";
  tablaContainer.appendChild(tabla);
};

inicio = () => {
  document.getElementById("b1").addEventListener("click", cargarPosts);
};
window.addEventListener("DOMContentLoaded", inicio);
