/*Crea un programa que pida al usuario una opción del menú:
1) Potencia
2) Raiz
3) Redondeo
● Si el usuario introduce un 1, se debera pedir una base y un exponente y se mostrara
el resultado en pantalla : ‘La potencia de X elevada a Y es: ’
● Si el usuario introduce un 2, se le pedirá un numero no negativo y se mostrará el
resultado en pantalla : ‘La raiz de X es: ’
● Si el usuario introduce un 3, se le pedirá un decimal por pantalla, y se se mostrará el redondeo al entero
mas próximo, al alta y a la baja.*/
do {
  var menu = prompt(
    "Escoge una opcion del menú:\n 1) Potencia \n 2) Raíz \n 3) Redondeo"
  );
} while (isNaN(menu) || menu < 1 || menu > 3);
var resultado = 0;
switch (Number(menu)) {
  case 1:
    do {
      var base = prompt("Indica la base");
      var exponente = prompt("Indica el exponente");
    } while (isNaN(base) || isNaN(exponente));
    resultado = Math.pow(base, exponente);
    document.write(
      "La potencia de " + base + " elevada a " + exponente + " es: " + resultado
    );
    break;
  case 2:
    do {
      var num = prompt("Dime un número positivo");
    } while (isNaN(num) || num < 0);
    resultado = Math.sqrt(num).toFixed(2);
    document.write("La raiz de " + num + " es: " + resultado);
    break;
  case 3:
    do {
      var decimal = prompt("Dime un número decimal");
    } while (isNaN(decimal));
    document.write(
      "Redondeo de " + decimal + " al alza: " + Math.ceil(decimal)
    );
    document.write("<br>");
    document.write(
      "Redondeo de " + decimal + " a la baja: " + Math.floor(decimal)
    );
}
