/*Solicitar un número del 1 al 10 y mostrar la tabla de multiplicar de dicho número*/
do {
  var num = prompt("Introduzca un número del 1 al 10");
} while (isNaN(num) || num <= 0 || num > 10); // es numero positivo y dato numérico

for (let i = 1; i <= 10; i++) {
  document.write(num + "x" + i + "= " + num * i + "<br>");
}
