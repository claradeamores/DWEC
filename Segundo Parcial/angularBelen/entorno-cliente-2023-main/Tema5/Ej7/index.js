inicio = () => {
  document.getElementById("b1").addEventListener("click", obtenerUsuario);
};

function obtenerUsuario() {
  const usuarioContainer = document.getElementById("usuarioContainer");
  usuarioContainer.innerHTML = ""; // Limpiar el contenedor

  fetch("https://randomuser.me/api/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener el usuario");
      }
      return response.json();
    })
    .then((data) => mostrarUsuario(data.results[0]))
    .catch((error) => console.error("Error:", error.message));
}

function mostrarUsuario(usuario) {
  const usuarioContainer = document.getElementById("usuarioContainer");

  const imagenUsuario = document.createElement("img");
  imagenUsuario.src = usuario.picture.large;
  imagenUsuario.alt = "Foto de usuario";
  imagenUsuario.id = "imagenUsuario";

  const nombreUsuario = document.createElement("p");
  nombreUsuario.textContent = `Nombre: ${usuario.name.first} ${usuario.name.last}`;

  const correoUsuario = document.createElement("p");
  correoUsuario.textContent = `Correo: ${usuario.email}`;

  const ciudadUsuario = document.createElement("p");
  ciudadUsuario.textContent = `Ciudad: ${usuario.location.city}`;

  usuarioContainer.appendChild(imagenUsuario);
  usuarioContainer.appendChild(nombreUsuario);
  usuarioContainer.appendChild(correoUsuario);
  usuarioContainer.appendChild(ciudadUsuario);
}

document.addEventListener("DOMContentLoaded", inicio);
