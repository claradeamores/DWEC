obtenerRespuesta = () => {
  // Crear una instancia de XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configurar la solicitud
  xhr.open("GET", "https://yesno.wtf/api", true);

  // Configurar la función de devolución de llamada cuando la solicitud se complete

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      // La solicitud fue exitosa
      var respuesta = JSON.parse(xhr.responseText);
      mostrarRespuesta(respuesta.answer); // answer es si o no.
    } else {
      // Hubo un error en la solicitud
      alert("Error al obtener la respuesta");
    }
  });

  // Configurar la función de devolución de llamada para manejar errores de red
  xhr.onerror = function () {
    alert("Error de red");
  };

  // Enviar la solicitud
  xhr.send();
};

mostrarRespuesta = (respuesta) => {
  var respuestaElement = document.getElementById("respuesta");
  respuestaElement.innerHTML = "Respuesta: " + respuesta;
};

inicio = () => {
  document.getElementById("b1").addEventListener("click", obtenerRespuesta);
};
window.addEventListener("DOMContentLoaded", inicio);
