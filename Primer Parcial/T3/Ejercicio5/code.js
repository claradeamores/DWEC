/*Crear una página html con un campo de texto (input), poner vuestro nombre y 
al pulsar un botón,
mostrareis el contenido del input debajo del botón.
Pista: usar etiqueta div
Añadir al ejercicio que después de pulsar el botón, limpie el cuadro de texto 
y ponga el foco en él.
Añadir ahora que el nombre lo muestre en color azul y en negrita.*/
//
var $boton;
var $texto;
var $div1;

let debajo = (e) => {
  e.preventDefault();
  //Añado al div el el texto que contiene en input text con value
  $div1.innerHTML = $texto.value;
  //cambio el estilo del div que es donde se mueve el texto
  $div1.style.color = "blue";
  $div1.style.fontWeight = "bold";
  $div1.style.fontSize = "16pt";
  //le doy el valor de cadena vacía al value del input text
  $texto.value = " ";
  //Fongo focus sobre la cajita del el input text
  $texto.focus();
};
let inicio = (e) => {
  e.preventDefault();
  $texto = document.getElementById("i1");
  $boton = document.getElementById("i2");
  $div1 = document.getElementById("div1");
  $boton.addEventListener("click", debajo);
};

window.addEventListener("DOMContentLoaded", inicio);
