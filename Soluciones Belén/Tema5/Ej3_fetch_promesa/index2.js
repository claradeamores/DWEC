obtenerRespuesta = () => {
  fetch("https://yesno.wtf/api")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener la imagen");
      }
      return response.json();
    })
    .then((data) => {
      mostrarRespuesta(data.image);
    })
    .catch((error) => console.error("Error:", error.message));
};

mostrarRespuesta = (respuesta) => {
  var respuestaElement = document.getElementById("respuesta");
  respuestaElement.innerHTML =
    '<img src="' + respuesta + '" alt="Respuesta GIF">';
};

inicio = () => {
  document.getElementById("b1").addEventListener("click", obtenerRespuesta);
};
window.addEventListener("DOMContentLoaded", inicio);
