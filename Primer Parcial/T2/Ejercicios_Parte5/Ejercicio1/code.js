/*Dado un array de números: const arr = [2, 3, 4, 5, 0]:
1. Escribir por consola la suma del array. Hacerlo con el método forEach y arrow functions.
2. Escribir por consola la media.
3. Obtener otro array con el triple de cada elemento y mostrarlo por consola.
4. Obtener el mismo array con el triple de cada elemento y mostrarlo por consola.*/
//creo una variable array con los datos indicados
const arr = [2, 3, 4, 5, 0];
//creo una variable suma para sumar todos los valores contenidos en el array
let suma = 0;
//foreach flecha para realizar la suma de los valores
arr.forEach((e) => {
  suma += e;
});
//impresión de la suma de todos los valores
console.log(`La suma de todos los valores de array es: ${suma}`);
//creación de la variable media que me calcula la media. Despues lo imprimo
media = suma / arr.length;
console.log(`La media de todos los valores de array es: ${media}`);
//funcion flecha map que crea un nuevo array a partir del anterior
const array2 = arr.map((el) => el * 3);
console.log(
  `El nuevo array con los valores multiplicados por tres es: ${array2}`
);
//Creo una funcion flecha que me hace eleva a tres el valor recogido en cada posición
arr.forEach((e, index) => {
  arr[index] = e * 3;
});
console.log("El array modificado es: " + arr);
