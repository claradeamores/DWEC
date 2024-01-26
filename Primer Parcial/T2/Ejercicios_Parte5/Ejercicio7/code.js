/*Hacer un programa que pida por pantalla al usuario una palabra y la invierta. Debe mostrar por pantalla la
palabra original y la invertida:
Ejemplo: La palabra hello invertida es olleh*/
do {
  palabra = prompt("Dime una palabra");
  array = palabra.split("");
  arrayInvertido = array.reverse();
  palabraInvertida = arrayInvertido.join("");
  document.write(palabraInvertida);
} while (palabra === null || !isNaN(palabra));
