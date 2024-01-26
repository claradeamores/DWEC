/*Crear una página que pida al usuario un número y escriba por pantalla el número de cifras que tiene el
número. Escribir el resultado con string template en una etiqueta <div> en cursiva y color azul.*/
let num = prompt("Dime un número");
document.write(
  `<div class="estilo1"> El número ${num} y su longitud ${num.length}</div>`
);
