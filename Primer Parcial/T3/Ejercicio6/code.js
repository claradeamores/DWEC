/*Crear un formulario con los componentes más usuales: editor de texto, área de texto, un conjunto de radio
botones, un par de checkbox, y una lista desplegable. Colocaremos un botón, al hacer clic sobre él,
recogeremos la información introducida por el usuario y la mostraremos en un div.*/
var $text;
var $area;
var $radio;
var $check;
var $select;
var $boton;
var $div;
var cadena = "Valores recogidos del formulario ";
let datos = (e) => {
  e.preventDefault();
  cadena =
    "<p>Texto: </br>" +
    $text.value +
    "</p><p>Textarea: </br>" +
    $area.value +
    "</p><p>Button radio escogido: <br/>";
  for (let i = 0; i < $radio.length; i++) {
    if ($radio[i].checked == true) {
      cadena = cadena + $radio[i].value;
    }
    cadena = cadena + "</p>";
  }
  cadena = cadena + "<p>Checks escogidos: </br>";
  for (let i = 0; i < $check.length; i++) {
    if ($check[i].checked == true) {
      cadena = cadena + $check[i].value;
    }
    cadena = cadena + "</p>";
  }
  cadena = cadena + "<p>Select escogido: </br>";
  for (let i = 0; i < $select.length; i++) {
    if ($select.options[i].selected == true) {
      cadena = cadena + $select.options[i].text;
    }
    cadena = cadena + "</p>";
  }
  $div.innerHTML = cadena;
};
let inicio = (e) => {
  e.preventDefault();
  $text = document.getElementById("texto");
  $area = document.getElementById("area");
  // Selecciona todos los botones de radio con el mismo nombre otra manera de hacerlo.
  //$radio = document.querySelectorAll('input[type="radio"][name="radiono"]');
  //$check = document.querySelectorAll('input[type="checkbox"][name="ch"]');
  //se tiene que acceder así, ya que el array va ligado al name en los dos casos
  $radio = form1.radiono;
  $check = form1.ch;
  $select = document.getElementById("s1");
  $boton = document.getElementById("b1");
  $div = document.getElementById("d1");
  $boton.addEventListener("click", datos);
};

window.addEventListener("DOMContentLoaded", inicio);
