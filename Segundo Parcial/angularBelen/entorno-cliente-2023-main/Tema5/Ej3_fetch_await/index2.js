async function obtenerRespuesta() {
  try {
    const response = await fetch("https://yesno.wtf/api");

    if (!response.ok) {
      throw new Error("Error al obtener la respuesta");
    }

    const data = await response.json();
    mostrarRespuesta(data.image);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

mostrarRespuesta = (respuesta) => {
  var respuestaElement = document.getElementById("respuesta");
  respuestaElement.innerHTML =
    '<img src="' + respuesta + '" alt="Respuesta GIF">';
};

inicio = () => {
  document.getElementById("b1").addEventListener("click", obtenerRespuesta);
};
window.addEventListener("DOMContentLoaded", inicio);
