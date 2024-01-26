var temp1;
var posicion = 0;
img1 = document.getElementById("p1");
img2 = document.getElementById("p2");
/*Función que diseña el movimiento de las dos imágener de manera que laprimera 
va más lenta que la segunda*/
aCorrer2 = () => {
  img1.style.left = posicion + "%";
  img2.style.left = posicion + 5 + "%";
  posicion++;
  /* Indicación para que cuando llegue al final de lapantalla vuelva al inicio para
  poder crear una animacion*/
  if (posicion >= 90) {
    posicion = 0;
  }
};
// Funcion para hacer la animación de las imagenes
let aCorrer = () => {
  // Deshabilito los botones que no quiero que se pulsen
  //form1.comenzar.disabled = true;
  form1.empate.disabled = true;
  form1.correr.disabled = true;
  /*Establezco temp1 para que me mueva las animaciones con las condiciones
  recogidas en la funcion aCorrer2*/
  temp1 = setInterval(aCorrer2, 70);
  console.log(3);
};
//Función que diseña el movimiento de las dos imágener de manera pareja
iguales2 = () => {
  img1.style.left = posicion + "%";
  img2.style.left = posicion + "%";
  posicion++;
  /* Indicación para que cuando llegue al final de lapantalla vuelva al inicio para
  poder crear una animacion*/
  if (posicion >= 90) {
    posicion = 0;
  }
};
// Funcion para hacer la animación de las imagenes
let iguales = () => {
  // Deshabilito los botones que no quiero que se pulsen
  //form1.comenzar.disabled = true;
  form1.empate.disabled = true;
  form1.correr.disabled = true;
  /*Establezco temp2 para que me mueva las animaciones con las condiciones
  recogidas en la funcion iguales*/
  temp1 = setInterval(iguales2, 70);
};

/*Función que me devuelve las imágenes al inicio*/

/*Función que me para el intervalo, pero sigue permaneciendo la posicion un
  en el lugar que se encuentra y vuelve al inicio*/
stop = () => {
  //se tiene que poner si en html está puesto la etoqueta button y type submit, esta deprecated su uso
  // event.preventDefault();
  clearInterval(temp1);
  console.log(1);
};
empezar = () => {
  img1.style.left = 0 + "%";
  img2.style.left = 0 + "%";
  console.log(2);
};
