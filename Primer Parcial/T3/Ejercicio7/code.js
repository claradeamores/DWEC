/*Crear una página html con dos input de tipo text. Cuando se escriba en ambos, 
el color del texto debe ser
rojo y cuando pierda el foco, el color del texto será negro.
Después, añadir un botón ‘Púlsame’, con un evento, tal que al hacer click ponga el color 
del texto azul.
Añadir otro botón ‘Cambia’, de forma que al pasar por encima ponga el borde del botón de color verde y
cuando salga del botón, lo ponga de color naranja.*/
var $texto1;
var $texto2;
var $pulsa;
var $cambia;
let escribir = (e) => {
  e.preventDefault();
  $texto1.value.style.color = "red";
  $texto2.value.style.color = "red";
};
let desenfocar = (e) => {
  e.preventDefault();
};
let pulsame = (e) => {
  e.preventDefault();
};
let cambiar1 = (e) => {
  e.preventDefault();
};
let cambiar2 = (e) => {
  e.preventDefault();
};

let inicio = (e) => {
  e.preventDefault();
  $texto1 = document.getElementById("texto1");
  $texto2 = document.getElementById("texto2");
  $pulsa = document.getElementById("pulsa");
  $cambia = document.getElementById("cambia");
};

window.addEventListener("DOMContentLoaded", inicio);
