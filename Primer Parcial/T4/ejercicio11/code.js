/*11.- Realizar los apartados siguientes:
A. Dado un array con las estaciones del año, crear desde javascript una lista 
con cada uno de los
valores del array. Tendrá un titulo Estaciones del año. Utilizar createElement
B. Dado un array con los continentes, crear ahora la lista utilizando innerHTML*/
//creo array de estaciones
let arrayEstaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
//creo la lista
var par=document.createElement("p");
par.innerHTML="Estaciones del Año";
var lista = document.createElement("ul");
//for para recorrer array y asignarle los valores al nodotexto de la lista y crear las filas
//de la lista
for (let i = 0; i < arrayEstaciones.length; i++) {
  var fila = document.createElement("li");
  var texto = document.createTextNode(arrayEstaciones[i]);
  fila.appendChild(texto);
  lista.appendChild(fila);
}
//Añado la fila al cuerpo del html
par.appendChild(lista);
document.body.appendChild(par);
//Creo un array con los continentes
let par2=document.createElement("p");
par2.innerHTML="Continentes del mundo";
var lista2 = document.createElement("ul");
let arrayContinentes = [
  "Asia",
  "África",
  "Ámerica",
  "Europa",
  "Antártida",
  "Oceanía",
];
//for para recorrer array y asignarle lo que contienen con innerHTML
//de la lista y crear las filas
//de la lista
for (let i = 0; i < arrayContinentes.length; i++) {
  fila = document.createElement("li");
  fila.innerHTML=arrayContinentes[i];
  //le digo que no me ponga ningún estilo en la lista;
  fila.style.listStyle="none";
  lista2.appendChild(fila);
}
par2.appendChild(lista2);
document.body.appendChild(par2);
