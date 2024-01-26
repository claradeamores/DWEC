/*. Crea un programa que pida al usuario su nombre y apellidos (de una vez) y 
muestre por pantalla:
● El tamaño del nombre mas los apellidos( sin contar espacios)
● La cadena en minúsculas y en mayúsculas
● Que divida el nombre y los apellidos y los muestre en 3 líneas
● Que devuelva una cadena compuesta por la inicial del nombre, el primer apellido y la
inicial del segundo apellido. EJ: Para Belén Tudó Ramírez→ btudor
● Que devuelva una cadena compuesta por las tres primeras letras del nombre y de los
dos apellidos. EJ: beltudram*/
//Validación de datos
do {
  var nombreCompleto = prompt("Dime tu nombre y apellidos");
} while (
  !isNaN(nombreCompleto) ||
  nombreCompleto == "" ||
  nombreCompleto == null
);
//Quito los espacios del nombre para recoger tamaño
let tamanyo = nombreCompleto.replace(" ", "");
tamanyo = tamanyo.length;
//Pongo el nombre en mayúsculas
let may = nombreCompleto.toUpperCase();
//Pongo el nombre en minúsculas
let min = nombreCompleto.toLowerCase();
//Creo un array con 2 posiciones (nombre, apellido1, apellido2)
let dividido = nombreCompleto.split(" ");
//Creo una cadena que recoje la primera letra de nombre, el primer apellido y 
//la primera letra del segundo apellido
let nombreIn = dividido[0]
  .substring(0, 1)
  .concat(dividido[1])
  .concat(dividido[2].substring(0, 1));
  //Creo una cadena que recoje la tres primeras letra de nombre, 
  //primer y segundo apellidos
let nombreTres = dividido[0]
  .substring(0, 3)
  .concat(dividido[1].substring(0, 3))
  .concat(dividido[2].substring(0, 3));
//Impresión
document.write("Tamaño sin espacios: " + tamanyo + "<br>");
document.write("Nombre en mayúsculas: " + may + "<br>");
document.write("Nombre en minúsculas: " + min + "<br>");
//Impresion en tres lineas de nombre y apellidos
document.write(
  "Nombre: " +
    dividido[0] +
    "<br>Apellido1: " +
    dividido[1] +
    "<br>Apellido2: " +
    dividido[2] +
    "<br>"
);
document.write(
  "Nombre con inicial, apellido1 completo y apellido2 inicial: " +
    nombreIn.toLowerCase() +
    "<br>"
);
document.write("Tres primeras letras: " + nombreTres.toLowerCase());
