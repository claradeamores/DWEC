/*Calcular y mostrar la media de 3 números leídos por el teclado. Si el promedio es mayor o igual a 7
mostrar por pantalla ‘Promocionado’*/

let num1 = prompt("Dime un número");
let num2 = prompt("Dime otro número");
let num3 = prompt("Dime un último número");
let media = ((Number(num1) + Number(num2) + Number(num3)) / 3).toFixed(2);
if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
  if (media >= 7) {
    document.write("Media: " + media + " Promocionado");
  } else document.write("Media: " + media + " No promocionado");
} else document.write("Debe introducir números");
