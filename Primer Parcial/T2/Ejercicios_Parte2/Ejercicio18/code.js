/*Pedir dos números al usuario y mostrar todos los números que se encuentran entre ellos*/
let num1 = parseInt(prompt("Indica un número"));
let num2 = parseInt(prompt("Indica otro número"));
if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 < num2) {
    for (let i = num1 + 1; i < num2; i++) {
      document.write(i + " ");
    }
  } else {
    document.write("Debes dar primero un número menor");
  }
} else {
  document.write("Debes introducir un valor numérico");
}
