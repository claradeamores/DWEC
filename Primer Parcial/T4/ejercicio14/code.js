/*14- A partir de una lista de 10 elementos (ejemplo lorem), preguntar al usuario 
con mensaje de prompt un texto a introducir y una posición del 1 al 10. Colocar el texto en la posición indicada. 
Si la posición no es correcta
indicarlo.
NOTA: si se quiere añadir en la última posición, el texto nuevo tendrá que quedar el último de la lista.*/
var posicion;
do {
  var texto = prompt("Dime el texto que quieras introducir");
  var posicion = prompt("Dime una posicion del uno al 10");
  if(posicion < 1 || posicion > 10){
    posicion=prompt("La posición no es correcta, dime una posición válida");
  }
} while (posicion < 1 && posicion > 10);
var filas=document.getElementsByTagName("li");
var lista=document.getElementsByTagName("ul");

