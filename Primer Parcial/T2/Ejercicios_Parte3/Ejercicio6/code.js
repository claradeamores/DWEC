/*Escribir por pantalla una representación textual 
con el nombre completo del día de la semana en español.*/
var fecha = new Date();
var dia;

switch (fecha.getDay()) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Lunes";
    break;
  case 2:
    dia = "Martes";
    break;
  case 3:
    dia = "Miércoles";
    break;
  case 4:
    dia = "Jueves";
    break;
  case 5:
    dia = "Viernes";
    break;
  case 6:
    dia = "Sábado";
    break;
}
document.write("Estamos a " + dia);

/* otra manera, creando constantes
const fecha = new Date();
const diaSemana = fecha.getDay(); // 0 es domingo, 6 es sábado

const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const nombreDia = diasSemana[diaSemana];
document.write(`Hoy es ${nombreDia}`);
*/
