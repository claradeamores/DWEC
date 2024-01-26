/*Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del mismo (El perímetro de un
cuadrado se calcula multiplicando el valor del lado por cuatro)*/
do {
  var num = prompt("Introduzca un número positivo");
} while (isNaN(num) || num <= 0); // es numero positivo

for (i = 1; i <= num; i++) {
  for (j = 1; j <= num; j++) {
    if (i == 1 || i == num || j == 1 || j == num) {
      document.write("*" + " ");
    } else document.write("&nbsp; &nbsp;");
  }
  document.write("<br>");
}

document.write(`El perímetro del cuadrado es: ${num * 4}`);
