/*Crear una página que pida al usuario un número a través de un cuadro de lectura. Mostrar con una ventana
alert si el valor introducido es un número o no.*/
let num = prompt("Dime un número");
if (isNaN(parseInt(num))) {
  alert("El dato introducido no es un número");
} else alert("El dato introducido es un número");
