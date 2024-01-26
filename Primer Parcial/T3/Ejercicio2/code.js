/*Crear un formulario con una etiqueta label y un input type text para que escribáis vuestro nombre. Cuando
hagáis click fuera del campo, tendréis que convertir el nombre a mayúsculas en el input. Debe quedarse
señalado. Usar función flecha.El formulario también tendrá una etiqueta <audio > y dos botones: Reproducir sonido y Detener sonido.
Buscar un mp3 y guardarlo en el proyecto. Cuando pulse ‘ Reproducir sonido’ debe escucharse el sonido y
cuando se pulse ‘Detener sonido’, debe pararse. No debe*/
//Declaro primero las variables vacías
var $nombre;
var $reproducir;
var $parar;
var $sonido;
//recibe e, que es una función preestablecida
let cambiar = (e) => {
  //poner siempre para prevenir acciones que tengan los input por defecto
  e.preventDefault();
  //selecciono elvalor y lo pongo en mayúscula
  $nombre.value = $nombre.value.toUpperCase();
  //select representa elemento html escogido
  $nombre.select();
};

let reproducir = (e) => {
  e.preventDefault();
  //función para reproducir sonido
  $sonido.play();
};
let parar = (e) => {
  e.preventDefault();
  //función para parar sonido
  $sonido.pause();
  //para que el sonido empiece de nuevo
  $sonido.currentTime = 0;
};
//funcion creada para llamarla desde DOMContentLoaded, se tienen que inicializar variables
//y añadir eventos aquí
let inicio = (e) => {
  e.preventDefault();
  //le doy valor a las variables por id
  $nombre = document.getElementById("nombrePersona");
  $reproducir = document.getElementById("b1");
  $parar = document.getElementById("b2");
  $sonido = document.getElementById("audio");
  //creo los eventos blur:señalar contenido, click: un click al ratón
  $nombre.addEventListener("blur", cambiar);
  $reproducir.addEventListener("click", reproducir);
  $parar.addEventListener("click", parar);
};
//Función para que me cargue el js desde el principio, sin tener que poner la etiqueta script
//al final con DOMContentLoaded
window.addEventListener("DOMContentLoaded", inicio);
