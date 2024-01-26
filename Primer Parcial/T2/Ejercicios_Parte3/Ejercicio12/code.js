/*Solicitar 3 números al usuario y mostrarlos por pantallas de forma ascendente sin 
usar condicionales ni
bucles.
PISTA: usar métodos de Math*/
do {
  var num1 = prompt("Dime un número");
  var num2 = prompt("Dime otro número");
  var num3 = prompt("Dime un último número");
} while (isNaN(num1) || isNaN(num2) || isNaN(num3));
let min = Math.min(num1, num2, num3);
let max = Math.max(num1, num2, num3);
let med =
  Number(num1) + Number(num2) + Number(num3) - Number(min) - Number(max);
document.write(
  "Número mayor: " +
    max +
    "<br>Número medio: " +
    med +
    "<br>Número menor: " +
    min
);
