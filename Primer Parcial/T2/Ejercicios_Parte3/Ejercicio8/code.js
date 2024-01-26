/*Escribir la fecha y hora en el formato: Dia_de_semana HH AM/PM : MM: SS*/
var fecha = new Date();
var diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
var diaSemana = diasSemana[fecha.getDay()];
var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();
var amPm;
if (horas < 12) {
  amPm = "am";
} else {
  amPm = "pm";
}

document.write(`${diaSemana} ${horas} ${amPm} : ${minutos} : ${segundos}`);
