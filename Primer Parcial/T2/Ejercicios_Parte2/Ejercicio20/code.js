/*De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa
 que lea los
datos de entrada e informe:
a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, 
otorgarle un aumento del 20
%, mostrar el sueldo a pagar.
b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, 
otorgarle un aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.*/
do {
  var sueldo = prompt("Dime cuánto ganas");
  var anyos = prompt("Dime cuántos años llevas en la empresa");
} while (isNaN(sueldo) || isNaN(anyos) || sueldo < 0 || anyos < 0);

if (sueldo < 500 && anyos >= 10) {
  sueldo *= (1.2).toFixed(2);
} else if (sueldo < 500 && anyos < 10) {
  sueldo *= (1.05).toFixed(2);
}

document.write("<p>Nuevo sueldo: " + sueldo + "</p>");
