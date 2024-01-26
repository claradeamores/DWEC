/*Crear una página que muestre un lista de elementos (<ul><li>). Para ello, nada más cargarla,
se abrirá otra subventana de 700x300 con un mensaje al usuario para que introduzca un 
número entre el 1 y el 20. No hace falta validarlo.
Después, se cerrará la subventana y se llamará a la función flecha que será la encargada de 
escribir en la página inicial la lista con tantas filas como número haya indicado de la forma: 
Si el usuario introduce el número 3, se mostrará:
1
2
3
*/

var subventana = (a) => {
  nuevaVentana = window.open("", "nuevaVentana", "width=700,height=300 ");
  var cad = "<ol>";
  for (let i = 0; i < a; i++) {
    cad += `<li> ${i + 1}</li>`;
  }
  cad += "</ol>";

  return cad;
};

document.write(subventana(num));
