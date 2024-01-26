/*Crear una página con un botón ‘¿Es fin de semana?’
Al pulsar el botón se abrirá una ventana de 400x400 que mostrará una imagen con carita sonriente si es fin
de semana o una carita no sonriente si no es fin de semana.
Utilizar funciones flechas en un fichero js independiente.
Descargar dos imágenes para poder lanzar el ejercicio.*/
ventanas = () => {
  let a = new Date();
  nuevaVentana = window.open("", "nuevaVentana", "width=500,height=500 ");
  if (a.getDay() == 0 || a.getDay == 6) {
    nuevaVentana.document.write("<img src='./img/alegria.jpg'>");
  } else {
    nuevaVentana.document.write("<img src='./img/pena.jpg'>");
  }
};
