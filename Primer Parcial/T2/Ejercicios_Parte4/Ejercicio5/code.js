/*Crear una función flecha que permita dibujar una tabla en una página web. Como parámetros tendrá el
numero de filas y de columnas. Por defecto 10 y 4. También tendrá un tercer parámetro que permite
indicar el color del borde, que por defecto será negro.
La tabla se crea con un borde de 1 pixel entre cada celda. El borde exterior tendrá 3 pixeles
 y será del
mismo color que el borde de las celdas.
La tabla ocupará toda la anchura de la página
1) Llamar a la función para crear la tabla con borde negro, de 10 filas y 4 columnas
2) Llamarla de nuevo para generar la table de 20 filas, 10 col con borde negro
3) Dibujar 10 tablas de 5 filas y 4 columnas con borde verde.*/
//funcion flecha para crear la estructura base para las siguientes tablas.
let tablaEstructura = (filas = 10, columnas = 4, colorBorde = "black") => {
  let celdas = "";
  for (let i = 1; i <= filas; i++) {
    //creación de las filas
    celdas += `<tr  style="border: 1px solid ${colorBorde}">`;
    //cresción de las columnas
    for (let j = 1; j <= columnas; j++) {
      celdas += `<td style="border: 1px solid ${colorBorde}">conseguido!!</td>`;
    }
    //cierre de la etiqueta para fila
    celdas += "</tr>";
  }
  //monto la estructura para el html de la tabla con los valores recogidos
  var tabla = `<table style="border: 3px solid ${colorBorde}; width:100%">${celdas}</table><br>`;
  return tabla;
};
//con funcion innerHTML voy añadiendo las distintas tablas al body del html, colocar el
//enlace dentro de la etiqueta body porque sino lanza error y no carga y además porque es donde se
//está incrustando el codigo html
document.body.innerHTML += tablaEstructura(); //añado a la cadena el primer apartado
document.body.innerHTML += tablaEstructura(20, 10, "black"); //añado a la cadena el segundo apartado
//Bucle para imprimir las 10tablas del apartado3
for (let k = 0; k < 10; k++) {
  document.body.innerHTML += tablaEstructura(5, 4, "green");
}
