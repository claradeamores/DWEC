/*Crear una página cuyo código JS cree dos fechas: una actual y otra con vuestro cumpleaños:
1. Imprimir las dos fechas por pantalla con la información completa
2. Extraer su año e imprimirlos por pantalla
3. Actualizar el año de la fecha actual por la del año pasado. Escribir la fecha con un 
formato más legible.
4. Escribir por pantalla la fecha actual obteniendo el día, el mes y 
el año por separado. (dd/mm/yyyy)*/
let fechaActual = new Date();
let cumple = new Date(1981, 7, 2);
document.write("Fecha Actual: " + fechaActual.toLocaleDateString() + "<br>");
document.write("Fecha de Cumpleaños: " + cumple.toLocaleDateString() + "<br>");
document.write("Año de la fecha actual: " + fechaActual.getFullYear() + "<br>");
document.write("Año de nacimiento: " + cumple.getFullYear() + "<br>");
fechaActual.setFullYear(fechaActual.getFullYear() - 1);
document.write("Fecha Actual: " + fechaActual.toLocaleDateString() + "<br>");
document.write(
  "Fecha actual: " +
    fechaActual.getDate() +
    "/ " +
    (fechaActual.getMonth() + 1) +
    "/" +
    fechaActual.getFullYear()
);
