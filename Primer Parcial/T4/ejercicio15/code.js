/*Crear desde javascript las filas y colunnas de dicha tabla dentro del cuerpo de la tabla 
(tbody). 
Crear un array de 4
elementos, donde cada elemento será un objeto literal con los campos: 
id, nombre, precio y código. 
Cada objeto
literal tendrá los datos de una fila. 
El id del objeto tendrá que asignárselo al id de la fila(<tr>).*/
var objeto1 = {
  id: "1",
  nombre: "Mouse Logitech",
  precio: "20",
  codigo: "123",
};
var objeto2 = {
  id: "2",
  nombre: "Teclado Logitech",
  precio: "25",
  codigo: "235",
};
var objeto3 = {
  id: "3",
  nombre: "Altavoces Polk Audio T50",
  precio: "193,70",
  codigo: "776",
};
var objeto4 = {
  id: "4",
  nombre: "Pantalla LG 22'",
  precio: "70",
  codigo: "675",
};
let arrayElementos = [objeto1,objeto2,objeto3,objeto4];
 let cuerpo=document.getElementById("cuerpoTabla");
 let columnas=document.createElement("tr");
 for(let i=0;i<arrayElementos.length;i++){
filaObjeto=document.createElement("td");
let id=document.createTextNode(arrayElementos[i].id);
let nombre=document.createTextNode(arrayElementos[i].nombre);
let precio=document.createTextNode(arrayElementos[i].precio);
let codigo=document.createTextNode(arrayElementos[i].codigo);
filaObjeto.appendChild(id);
filaObjeto.appendChild(nombre);
filaObjeto.appendChild(precio);
filaObjeto.appendChild(codigo);
columnas.appendChild(filaObjeto);
}

cuerpo.appendChild(columnas);
