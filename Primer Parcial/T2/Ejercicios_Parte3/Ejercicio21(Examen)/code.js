/*Crear una aplicación web que muestre 2000 cuadrados de color aleatorio de 50 x50 píxeles.
Su posición también será aleatoria*/
function colorAleatorio() {
  const letras = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}
/*for (let i = 0; i < 2000; i++) {}*/

temp1 = setInterval(intervalo, 1000);
/*mi troyano
function intervalo() {
  for (let i = 0; i < 2000; i++) {
    let x = Math.floor(Math.random() * 1800);
    let y = Math.floor(Math.random() * 900);
    let nuevaVentana = window.open("", "nueva", "width=50,height=50");
    nuevaVentana.document.body.style.backgroundColor = colorAleatorio();
    nuevaVentana.moveTo(x, y);
  }
}
*/
