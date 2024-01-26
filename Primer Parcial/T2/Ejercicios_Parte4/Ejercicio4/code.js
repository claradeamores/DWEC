/*Crear una función flecha que escriba por pantalla el sumatorio de un número. 
El programa debe solicitar al
usuario un número mayor que 0. Comprobar que el número es válido.*/
do {
  var num = parseInt(prompt("Dime un número mayor que cero"));
} while (isNaN(num) || num <= 0); //compruebo que es un numero mayor que cero

let vsumatorio = (a) => {
  let suma = 0;
  let cad = "";
  //Bucle para hacer el sumatorio y montar la cadena para la impresion;
  for (let i = a; i > 0; i--) {
    suma += i;
    cad += i;
    if (i > 1) {
      cad += "+";
    }
  }
  return [cad, suma]; //funcion que devuelve un array con dos posiciones
};
let valores = vsumatorio(num);
let cad1 = valores[0];
let suma1 = valores[1];
document.write("El sumatorio de " + num + " es: " + cad1 + "= " + suma1);
