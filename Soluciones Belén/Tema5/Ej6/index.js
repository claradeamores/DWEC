async function realizarPeticionPost() {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const datos = {
      title: "Título de ejemplo",
      body: "Cuerpo de ejemplo",
      userId: 1,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    if (!response.ok) {
      throw new Error("Error en la petición POST");
    }

    const resultado = await response.json();

    mostrarResultado(resultado);
  } catch (error) {
    mostrarError(error.message);
  }
}

function mostrarResultado(resultado) {
  const resultadoDiv = document.getElementById("usuario-info");
  resultadoDiv.innerHTML = `<h1>Datos insertados</h1>
    <p><strong>ID:</strong> ${resultado.id}</p>
    <p><strong>Título:</strong> ${resultado.title}</p>
    <p><strong>Cuerpo:</strong> ${resultado.body}</p>
    <p><strong>Usuario ID:</strong> ${resultado.userId}</p>
  `;
}

function mostrarError(mensaje) {
  const resultadoDiv = document.getElementById("usuario-info");
  resultadoDiv.innerHTML = `<p id="error">${mensaje}</p>`;
}
document.addEventListener("DOMContentLoaded", realizarPeticionPost);
