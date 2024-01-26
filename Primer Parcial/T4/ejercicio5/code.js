/*Crear una página HTML vacia. Añadir un párrafo (<p>) con un texto a la página HTML*/
let par=document.createElement("p");
let text=document.createTextNode("Nuevo texto");
let body=document.getElementsByTagName("body");
par.appendChild(text);
body[0].appendChild(par);