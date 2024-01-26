/*Crear una función flecha que escriba por pantalla el factorial de un número. 
El programa debe solicitar al
usuario un número mayor o igual que cero. Comprobar que el número es válido.
Ejemplo: factorial(5) devuelve 120.*/
do {
  num = prompt("Dame un número mayor o igual a cero");
} while (isNaN(num) || num < 0); //compruebo que recibo un número y que es mayor oigual a cero

//función flecha para realizar el factorial
factorial = (num) => {
  let valor = 1;
  for (let i = 1; i <= num; i++) {
    valor *= i;
  }
  return valor;
};
if (num == 0) {
  document.write(`El factorial de ${num} es 1`);
} else {
  document.write(`El factorial de ${num} es ${factorial(num)}`);
}
