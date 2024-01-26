/*Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menor a 10, imprimir en
la página la leyenda ‘Alguno de los números es menor a diez’
*/
do {
  var num1 = prompt("Dime el primer número");
  var num2 = prompt("Dime el segundo número");
  var num3 = prompt("Dime el tercer número");
} while (isNaN(num1) || isNaN(num2) || isNaN(num3));
if (num1 < 10 || num2 < 10 || num3 < 10) {
  document.write("Alguno de los números es menor a diez");
}
