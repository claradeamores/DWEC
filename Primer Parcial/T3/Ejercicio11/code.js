/*Crear un formulario con 2 input de tipo de texto: Nombre y Apellidos. Y un botón validar.
Cuando pulsemos el botón tendremos que validar:
1. Si el nombre comienza por vocal.
2. Si los apellidos tienen más de dos palabras.
Poner debajo de cada input un mensaje en caso de no cumplir su validación.
Una vez hecho, añadir que el mensaje aparezca con letra de color rojo.*/
var $nombre;
var $apellidos;
var $validar;
var $resultado1;
var $resultado2;
let validacion = (e) => {
  e.preventDefault();
  alert(1);
  //convierto los valores a mayúsculas por defecto para que siempre me compare bien
  let nombreComprobar = $nombre.value.toUpperCase();
  //creo variable con valores del apellidos
  let apellidosComprobar = $apellidos.value;
  //Split para crear array y comprobar la longitus
  $soloDos = apellidosComprobar.split(" ");
  //compruebo que comiencen por vocales
  if (
    nombreComprobar.startsWith("A") ||
    nombreComprobar.startsWith("E") ||
    nombreComprobar.startsWith("I") ||
    nombreComprobar.startsWith("O") ||
    nombreComprobar.startsWith("U")
  ) {
    $resultado1.innerHTML = "El nombre comienza por vocal";
    $resultado1.style.color = "black";
  }
  else{
    $resultado1.innerHTML = "El nombre no comienza por vocal";
    $resultado1.style.color = "red";
  }
  if ($soloDos.length > 2) {
    $resultado2.innerHTML = "Hay mas de dos palabras";
    $resultado2.style.color = "red";
  }
  else{
    $resultado2.innerHTML = "Hay menos dos palabras";
    $resultado2.style.color = "black";
  }
};

let inicio = (e) => {
  e.preventDefault();
  $nombre = document.getElementById("nombre");
  $apellidos = document.getElementById("apellidos");
  $validar = document.getElementById("b1");
  $resultado1 = document.getElementById("resultado1");
  $resultado2 = document.getElementById("resultado2");
  $validar.addEventListener("click", validacion);
};

window.addEventListener("DOMContentLoaded", inicio);
