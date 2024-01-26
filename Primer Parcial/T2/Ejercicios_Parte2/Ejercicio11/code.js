/*Crear una aplicación web en la que se pida el nombre, los apellidos, el salario (número con decimales) y la
edad de una persona(un número entero). Suponemos que los datos están correctamente.
La página indicará el nombre y apellidos, edad y el salario según lo siguiente:
- si el salario es mayor de 2000 euros, no cambiará
- si el salario está entre 1000 y 2000:
1. si además la edad es mayor de 45 años, se sube un 3%.
2. si además la edad es menor de 45 o igual, se sube un 10%
- si el salario es menor de 1000
1. los menores de 30 años cobrarán exactamente 1100 euros
2. si la edad es de 30 a 45 años, el salario sube un 3%
3. A los mayores de 45 sube un 15%*/
let nombre = prompt("Indique su nombre");
let apellido1 = prompt("Indique su primer apellido");
let apellido2 = prompt("Indique su segundo apellido");
let salario = prompt("Indique su salario");
let edad = prompt("Indique su edad");
salario=parseFloat(salario);
edad=parseInt(edad);
if (salario > 2000) {  
} 
else if (salario <= 2000 && salario >= 1000) {
  if (edad > 45) {
    salario = salario * 0.03 + salario;
  } else salario = salario * 0.1 + salario;
} 
else {
  if (edad > 45) {
    salario = salario * 0.15 + salario;
  } else if (edad <= 45 && edad >= 30) {
    salario = (salario * 0.03) + salario;   
  } else salario = 1100;  
}
document.write("Nombre: "+nombre+" "+apellido1+" "+apellido2+"<br>Edad:"+edad+"<br>Salario final:"+salario);
