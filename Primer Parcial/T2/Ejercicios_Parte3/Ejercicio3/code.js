/*Crear un programa que pida al usuario dos números: el día y el mes de tu cumpleaños,
 y saque todos los años en que tu cumpleaños va a caer en domingo desde este año hasta el 
 año 2100.
NOTA: los meses comienzan por 0*/

do {
  dia = prompt("Indique el dia de su cumpleaños");
} while (isNaN(dia) || dia <= 0 || dia > 31);

do {
  mes = prompt("Indique el mes de su cumpleaños");
} while (isNaN(mes) || mes <= 0 || mes > 12);

var anyo = new Date().getFullYear();
var contador = 0;

for (i = anyo; i < 2100; i++) {
  var fecha = new Date(i, mes - 1, dia);
  if (fecha.getDay() == 0) {
    document.write(dia + "/" + mes + "/" + i);
    document.write("<br>");
    contador += 1;
  }
}
document.write("El total de años es " + contador);
