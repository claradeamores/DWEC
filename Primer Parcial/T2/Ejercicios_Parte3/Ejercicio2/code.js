/*Crear un programa que muestre por pantalla el número de días que quedan desde 
hoy hasta fin de curso (30 de junio de 2024).
PISTA1: si restamos dos fechas nos da el resultado en milisegundos.
PISTA2: ¿cómo pasamos de milisegundos a días?
1 dia → 24 horas * 60minutos * 60segundos * 1000milisegundos*/
let fechaActual = new Date();
let fechaDada = new Date(2024, 5, 30);
let numDias = (fechaDada - fechaActual) / 24 / 60 / 60 / 1000;
document.write(parseInt(numDias));
