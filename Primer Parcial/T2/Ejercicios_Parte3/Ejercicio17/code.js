/*Vamos a utilizar temporizadores:
1. Mostrar el mensaje ‘En un lugar de la Mancha’ por consola cada 2 segundos.
2. Usar un botón en la página para parar el temporizador anterior:
<input type="button" onclick="para()"
3. Usar otro botón en la página para mostrar por consola el mensaje ‘Han pasado 3 segundos’ después de
3 segundos, una sóla vez.
4. Usar otro botón para abrir una ventana nueva de 300x300 y escribir un texto con <p> en su interior
desde js. Esta ventana nueva debe mostrar la hora actual en formato HH:MM:SS. Se tiene que
actualizar continuamente como un reloj.
Parar el reloj a los 5 segundos.
Cerrarla tras 10 segundos.
NOTA1: Usar el código js en un fichero independiente: accion.js
NOTA2: Usar funciones dentro de los temporizadores:
setInterval(funcion, tiempo);
function funcion{
---
}*/
temp1 = setInterval(mensaje, 2000);
function mensaje() {
  console.log("En un lugar de la mancha");
}
function parar() {
  clearInterval(temp1);
}

function mensaje2() {
  console.log("Han pasado 3 segundos");
}
function lanzar() {
  temp2 = setTimeout(mensaje2, 3000);
}

function reloj() {
  fecha = new Date();
  nuevaVentana.document.write(fecha.toLocaleString());
}
function ventana() {
  nuevaVentana = window.open("", "ventana", "width=300px, height=300px");
  nuevaVentana.document.write("<p>Reloj con temporizador<p/>");
  temp3 = nuevaVentana.setInterval(reloj, 1000);
}
function pararReloj() {
  nuevaVentana.clearTimeout();
}
