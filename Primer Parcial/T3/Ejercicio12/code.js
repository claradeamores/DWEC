 /*12. Sobre el ejercicio anterior, modificar lo necesario para que una vez que se pulsa el botón, si se cumplen las
dos validaciones, el formulario debe redirigir a la página de: https://ceu.es.
En caso contrario, el comportamiento debe ser igual al ejercicio 11.*/
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
    !(nombreComprobar.startsWith("A") ||
    nombreComprobar.startsWith("E") ||
    nombreComprobar.startsWith("I") ||
    nombreComprobar.startsWith("O") ||
    nombreComprobar.startsWith("U"))
  ) {
    $resultado1.innerHTML = "El nombre no comienza por vocal";
    $resultado1.style.color = "red";
  }
  if ($soloDos.length > 2) {
    $resultado2.innerHTML = "Hay mas de dos palabras";
    $resultado2.style.color = "red";
  }
  else{
    window.location.href="https://ceuandalucia.es"
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
