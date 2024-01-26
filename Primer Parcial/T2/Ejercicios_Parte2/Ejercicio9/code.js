/*Crear una aplicación web que pida al usuario un número entero positivo. Si no es un número o no es
positivo, volveremos a pedir al usuario el número. La aplicación escribirá un triángulo con tantos
asteriscos como indique el usuario. Entre cada asterisco utilizar un espacio.
Ej: para el número 3
*
* *
* * **/

do {
  var num = prompt("Introduzca un número");
} while (isNaN(num) || num <= 0); // es numero positivo

for (i = 1; i <= num; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*" + " ");
  }
  document.write("<br>");
}
