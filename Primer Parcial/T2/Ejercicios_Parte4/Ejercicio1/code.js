/*Crear una función que se llame cuadrado. Que reciba un parámetro y devuelva el cuadrado del número.
1. Con funciones tradicionales
2. Con función anónima
3. Con función flecha.
4. Invocar a las funciones con ejemplos.*/

function cuadrado(a) {
  return Math.pow(a, 2);
}
let cuadrado2 = function (a) {
  return Math.pow(a, 2);
};
let cuadrado3 = (a) => {
  return Math.pow(a, 2);
};
document.write("Funcion tradicional: " + cuadrado(3) + "<br>");
document.write("Funcion anónima: " + cuadrado2(3) + "<br>");
document.write("Funcion flecha: " + cuadrado3(3) + "<br>");
