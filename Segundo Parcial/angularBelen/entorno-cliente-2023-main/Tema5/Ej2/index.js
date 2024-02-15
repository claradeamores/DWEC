cargarPosts = () => {
  // Crear una instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configurar la solicitud
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  // Configurar la función de devolución de llamada cuando la solicitud se complete
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      // La solicitud fue exitosa
      var posts = JSON.parse(xhr.responseText);
      mostrarPostsEnTabla(posts);
    } else {
      // Hubo un error en la solicitud
      alert("Error al cargar los posts");
    }
  });

  // Configurar la función de devolución de llamada para manejar errores de red
  xhr.onerror = function () {
    alert("Error de red");
  };

  // Enviar la solicitud
  xhr.send();
};

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
