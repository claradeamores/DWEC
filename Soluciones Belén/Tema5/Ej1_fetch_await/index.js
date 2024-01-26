async function cargarUsuario() {
  const userId = 5;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );

  if (!response.ok) {
    throw new Error("Error al obtener el usuario");
  }

  const usuario = await response.json();

  mostrarInfoUsuario(usuario);
}

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

cargarUsuario();
