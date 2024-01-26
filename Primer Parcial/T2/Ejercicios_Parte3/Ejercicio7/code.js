/*7. Escribir por pantalla los dos últimos dígitos del año de un objeto de tipo Date ( por ejemplo de la fecha
actual)*/
var fecha = new Date();
var anyo = fecha.getFullYear().toString();
document.write(anyo.substring(anyo.length - 2));
