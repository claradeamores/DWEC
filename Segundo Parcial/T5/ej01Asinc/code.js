async function agarrarRespuesta() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users/5');
    
    if (!respuesta.ok) {
      throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
    }
    
    const json = await respuesta.json();
    const usuarioInfo = document.getElementById("usuario-info");
    
    usuarioInfo.innerHTML = `<h1>Nombre: ${json.name}</h1><p>Usuario: ${json.username}</p><p>Correo: ${json.email}</p><p>Dirección: ${json.address.street}, ${json.address.suite}, ${json.address.city}</p>`;
  } catch (error) {
    console.error(error);
  }
}

agarrarRespuesta();
