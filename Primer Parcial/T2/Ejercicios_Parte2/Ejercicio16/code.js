/*Realizar esta figura rombo para un número de asteriscos que se pedirá por pantalla.
 El ejemplo es para 5 asteriscos.
     *
    **
   ***
  ****
 *****
*/
do {
  var num = prompt("Introduzca un número");
} while (isNaN(num) || num <= 0); // es numero positivo

for (i = 1; i <= num; i++) {
  for (j = 1; j <= num; j++) {
    if (i <= num - j) {
      document.write("&nbsp;&nbsp;" + " ");
    } else {
      document.write("*" + " ");
    }
  }
  document.write("<br>");
}
