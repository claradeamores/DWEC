/*Ejercicio 2: Dado este código, añadir un tercer elemento <p> antes del primero*/
let contenedor=document.getElementById("div1");
let pa1=document.getElementById("p1");
let par=document.createElement("p");
let text=document.createTextNode("I am new");
par.appendChild(text);
contenedor.insertBefore(par, pa1);