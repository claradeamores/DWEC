mostrarMensajeError = (mensaje) => {
  var mensajeError = document.getElementById("mensajeError");
  mensajeError.textContent = mensaje;
};

validarFormulario = (e) => {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores del usuario y la clave
  var usuario = document.getElementById("usuario").value;
  var clave = document.getElementById("clave").value;
  var cpostal = document.getElementById("cpostal").value;
  var $p = document.getElementById("provincia");

  // Validar que ambos campos tengan valor
  if (!usuario) {
    mostrarMensajeError("Usuario obligatorio");
    return;
  }
  if (!clave) {
    mostrarMensajeError("Clave obligatorio");
    return;
  }
  if (!cpostal) {
    mostrarMensajeError("Código postal obligatorio");
    return;
  }
  if ($p.selectedIndex == 0) {
    mostrarMensajeError("Debe seleccionar una provincia");
    return;
  }

  // Validar la longitud de la clave y que el último carácter sea un número
  if (clave.length < 8 || isNaN(clave.substring(clave.length - 1))) {
    mostrarMensajeError(
      "La clave debe tener al menos 8 caracteres y el último debe ser un número."
    );
    return;
  }

  if (isNaN(cpostal)) {
    mostrarMensajeError("El cpostal debe ser un número");
    return;
  }

  if (cpostal.length != 5) {
    mostrarMensajeError("El cpostal debe tener 5 dígitos");
    return;
  }

  if (cpostal.substring(0, 2) != $p.options[$p.selectedIndex].value) {
    // igual que $p.value
    // comparamos el valor del select con los dos primeros digitos del codigo postal

    mostrarMensajeError(
      "Los dos primeros digitos del codigo postal deben corresponder a la provincia"
    );
    return;
  }

  // Si la validación es exitosa, redirigir a otra página (por ejemplo, pagina-bienvenida.html)
  window.location.href = "formulario.html";
};

inicio = () => {
  document.getElementById("b1").addEventListener("click", validarFormulario);
};

window.addEventListener("DOMContentLoaded", inicio);
