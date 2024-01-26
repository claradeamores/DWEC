/*Crear 3 párrafos con sus id individuales. Desde javascript borrar el primero de los párrafos.*/
let par=document.getElementById("p1");
let body=document.getElementsByTagName("body");
body[0].removeChild(par);
//par.parentNode.removeChild(par);  otra manera más efectiva