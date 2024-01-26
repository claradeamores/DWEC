var $nombre;
var $apellidos;
var $edad;
var $provincia;
var $resultado;
var $limpiar;
let enviarFormulario = () => {
  document.forms[0].action = "https://www.google.es";
  document.forms[0].submit();
};
let comprobarNombre = () => {
  if ($nombre.value == "") {
    $nombre.focus();
    $resultado.style.color = "red";
    $resultado.innerHTML += "<p>Escribe tu nombre.</p>";
    return false;
  } else {
    return true;
  }
};
let comprobarApellidos = () => {
  if ($apellidos.value == "") {
    $apellidos.focus();
    $resultado.style.color = "red";
    $resultado.innerHTML += "<p>Escribe tus apellidos.</p>";
    return false;
  } else {
    return true;
  }
};
let comprobarEdad = () => {
  if (
    $edad.value == "" ||
    isNaN($edad.value) ||
    $edad.value < 0 ||
    $edad.value > 105
  ) {
    $edad.focus();
    $resultado.style.color = "red";
    $resultado.innerHTML += "<p>La edad debe estar entre 0 y 105</p>";
    return false;
  } else {
    return true;
  }
};
let resultadoProvincia = () => {
  if ($provincia.selectedIndex==0) {
    $resultado.style.color = "red";
    $resultado.innerHTML += "<p>Selecciona una provincia.</p>";
    return false;
  } else {
    return true;
  }
};
let comprobacionFinal = (e) => {
  e.preventDefault();
  var bien = false;
  if (comprobarNombre()) {
    bien = true;
  } else {
    bien = false;
  }
  if (comprobarApellidos()) {
    alert(3);
    bien = true;
  } else {
    bien = false;
  }
  if (comprobarEdad()) {
    bien = true;
  } else {
    bien = false;
  }
  if (resultadoProvincia()) {
    bien = true;
  } else {
    bien = false;
  }
  if (bien == true) {
    let $pregunta = confirm("¿Quieres enviar este formulario?");
    if ($pregunta == true) {
      $resultado.style.color = "black";
      $resultado.innerHTML = "<p>El formulario de enviará en 3 segundos</p>";
      setTimeout(enviarFormulario, 3000);
    }
  }
};

let limpiarErrores = () => {
  $resultado.innerHTML = "";
};

let inicio = () => {
  $nombre = document.getElementById("nombre");
  $apellidos = document.getElementById("apellidos");
  $edad = document.getElementById("edad");
  $provincia = document.getElementById("provincia");
  $resultado = document.getElementById("resultado");
  $enviar = document.getElementById("enviar");
  $enviar.addEventListener("click", comprobacionFinal);
  $limpiar = document.getElementById("limpiar");
  $limpiar.addEventListener("click", limpiarErrores);
};
window.addEventListener("DOMContentLoaded", inicio);
