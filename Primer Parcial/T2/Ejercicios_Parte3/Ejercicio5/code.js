/*Crear un programa que calcule la edad de una persona. Para ello pedirá al usuario la 
fecha de nacimiento en formato dd/mm/yyyy.*/
do {
  dia = prompt("Dime tu día de cumpleaños");
} while (isNaN(dia) || dia <= 0 || dia > 31);
do {
  mes = prompt("Dime el mes de tu cumpleaños");
} while (isNaN(mes) || mes <= 0 || mes > 12);
do {
  anyo = prompt("Dime el año de tu cumpleaños");
} while (isNaN(anyo) || anyo <= 1915);
fechaCumple = new Date(parseInt(anyo), parseInt(mes) - 1, parseInt(dia));
fechaActual = new Date();
document.write(
  "Tu edad es de " +
    Math.floor((fechaActual - fechaCumple) / 1000 / 365 / 24 / 60 / 60) +
    " años"
);
