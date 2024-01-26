/*Dado un párrafo con la letra en negrita( Font-weight:bold), acceder desde javascript a dicho
atributo. Asignarle una clase de estilo y acceder al nombre de la clase desde js.*/
let par=document.getElementById("p1");
par.style.color="red";
alert(par.className);