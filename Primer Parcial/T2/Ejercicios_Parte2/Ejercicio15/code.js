/*Pedir la base y la altura y mostrar una figura con asteriscos en los lados de un rectángulo.
 Eje: base 6 y altura 3
* * * * * *
* *
* * * * * *
*/
do {
  var altura = prompt("Introduzca la altura"); // filas
} while (isNaN(altura) || altura <= 0); // es numero positivo

do {
  var base = prompt("Introduzca la base"); // columnas
} while (isNaN(base) || base <= 0); // es numero positivo

for (i = 1; i <= altura; i++) {
  for (j = 1; j <= base; j++) {
    if (i == 1 || i == altura || j == 1 || j == base) {
      document.write("*" + " ");
    } else document.write("&nbsp; &nbsp;");
  }
  document.write("<br>");
}
