/*Crear un programa que pregunte al usuario si acepta o no abrir una ventana nueva. 
Sólo si acepta, se abrirá la nueva ventana. La nueva ventana no tendrá barra de herramientas,
 ni location, ni barra de menú. Tendrá 200x80 pixeles y y se posicionará en la posición 
 500x500. Será resizable y tendrá scrollbars.
La nueva ventana incluirá un pequeño texto.
Poner el foco en la nueva ventana.*/
let aceptar = window.confirm("¿Quieres abrir una nueva ventana");
if (aceptar) {
  let nuevaVentana = window.open(
    "",
    "Nueva ventana",
    "toolbar=0,location=0,resizable=1,scrollbars=1,width=200,height=80, top=500, left=500"
  );
  nuevaVentana.document.write(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae aliquid unde corrupti cupiditate, enim, cumque possimus tenetur dolor ducimus a sunt. Vitae non nemo, iusto hic nulla laudantium dolor voluptas."
  );
  nuevaVentana.focus();
}
