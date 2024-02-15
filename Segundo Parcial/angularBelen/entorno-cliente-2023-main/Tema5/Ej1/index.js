cargarUsuario = () => {
  // Crear una instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configurar la solicitud
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users/5", true);

  // Configurar la función de devolución de llamada cuando la solicitud se complete
  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      // La solicitud fue exitosa

      let usuario = JSON.parse(xhr.responseText);
      mostrarInfoUsuario(usuario);
    } else {
      // Hubo un error en la solicitud
      document.getElementById("usuario-info").innerHTML =
        "Error al cargar el usuario";
    }
  });

  // Configurar la función de devolución de llamada para manejar errores de red
  xhr.onerror = function () {
    document.getElementById("usuario-info").innerHTML = "Error de red";
  };

  // Enviar la solicitud
  xhr.send();
};

mostrarInfoUsuario = (usuario) => {
  var usuarioInfoDiv = document.getElementById("usuario-info");

  // Mostrar los datos del usuario en la página HTML
  usuarioInfoDiv.innerHTML =
    "<h2>Nombre: " +
    usuario.name +
    "</h2>" +
    "<p>Usuario: " +
    usuario.username +
    "</p>" +
    "<p>Correo: " +
    usuario.email +
    "</p>" +
    "<p>Dirección: " +
    usuario.address.street +
    ", " +
    usuario.address.suite +
    ", " +
    usuario.address.city +
    "</p>";
};

window.addEventListener("DOMContentLoaded", cargarUsuario);
