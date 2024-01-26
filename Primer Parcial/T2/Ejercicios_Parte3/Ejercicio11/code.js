/*Solicita al usuario su nombre y muestra con un mensaje alert ‘Buenos días Nombre’, 
Buenas tardes
Nombre’ o ‘Buenas noches Nombre’ dependiendo de la hora que sea.*/
var nombre = prompt("Indica tu nombre");
var fecha = new Date();

if (fecha.getHours() >= 6 && fecha.getHours() < 12) {
  document.write("Buenos dias " + nombre);
} else if (fecha.getHours() >= 12 && fecha.getHours() <= 20) {
  document.write("Buenas tardes " + nombre);
} else {
  document.write("Buenas noches " + nombre);
}
