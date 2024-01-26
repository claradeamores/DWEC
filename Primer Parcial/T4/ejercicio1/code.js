/*Ejercicio 1: Dado este código, añadir un tercer elemento <p>*/
let contenedor=document.getElementById("div1");
var par=document.createElement("p");
var text=document.createTextNode("I didn't exist before");
par.appendChild(text);
contenedor.appendChild(par);