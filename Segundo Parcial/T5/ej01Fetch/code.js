let inicio = () => {
  const div1 = document.getElementById("usuario-info");
  fetch("https://jsonplaceholder.typicode.com/users/5")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error: No se pudo obtener el usuario");
      } else {
        return respuesta.json();
      }
    })
    .then((json) => {
      div1.innerHTML = `<h1>Nombre: ${json.name}</h1><p>Usuario: ${json.username}</p><p>Correo: ${json.email}</p><p>Dirección: ${json.address.street}, ${json.address.suite}, ${json.address.city}</p>`;
    })
    .catch((error) => {
      console.error(error);
    });
};

window.addEventListener("DOMContentLoaded", inicio);
