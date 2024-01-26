/*Crear un array con 3 palabras que se introducirán por mensajes al usuario palabra a palabra 
(3 veces)
Si cancela, se insertará una cadena vacía en el array.
Escribir por consola y por pantalla, el array inicial y el array filtrando sólo las que 
comienzan por la letra C.
Si no hay ninguna, escribir: “No hay ninguna palabra que comience por C.”*/
/*forma mia
//Creo variables pidiendolas por consola
palabra1 = prompt("Dime la primera palabra");
palabra2 = prompt("Dime la segunda palabra");
palabra3 = prompt("Dime la tercera palabra");
//Indico que si cancelan los prompt o estan vacios le de valor de cadena vacía
if (palabra1 === null) {
  palabra1 = "";
}
if (palabra2 === null) {
  palabra2 = "";
}
if (palabra3 === null) {
  palabra3 = "";
}
//creo el array con las palabras recogidas
let array = [palabra1, palabra2, palabra3];*/
//forma belén, más corta y mejor
var cont = 1;
palabras = new Array();
do {
  palabra = prompt(`Palabra ${cont}:`);
  if (palabra == null) {
    palabras.push("");
  } else {
    palabras.push(palabra);
  }
} while (cont <= 3);
//creo una variable contador
const evens = array.filter((e) => e.startsWith("C"));
if (evens.length === 0) {
  console.log("No hay ninguna palabra que comience por C.");
  document.write("No hay ninguna palabra que comience por C.<br>");
} else {
  console.log("El antigüo array es " + array);
  console.log("El nuevo array es " + evens);
  document.write("El antigüo array es " + array + "<br>");
  document.write("El nuevo array es " + evens + "<br>");
}
