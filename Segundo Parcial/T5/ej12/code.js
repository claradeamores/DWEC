/*Avanzado. Animación de usuarios:
Vamos a utilizar la api randomuser.me para mostrar 50 caras aleatorias, 
cambiando de forma aleatoria 100 veces
cada 2 décimas de segundo (200ms). Para ello:
1. Haremos una llamada a la api para que devuelva 1000 imágenes: 
https://randomuser.me/api?results=1000.
2. Construiremos un array y guardaremos las 1000 fotos en tamaño large 
( ver respuesta de la api).
3. Cada 200 milisegundos, haremos una mezcla y “barajaremos” el array: 
para cada elemento del array,
intercambiamos la imagen de esa posición y otra calculada aleatoriamente 
entre 0 y esa posición.
4. De ese array, mostraremos las 50 primeras imágenes en una capa div de html.
5. Parará de mostrar caras aleatorias cuando se haya producido 100 cambios.*/
var arrayFotos=[];//Para almacenar fotos
var temp=null;//Temporizador
var cont=0;//Contador para el número de veces que vamos cambiando las caras
const PASADAS=100;//Número total de pasadas
const RESULTADOS=1000;//Número máximo de caras
//Función para reorganizar aleatoriamente el orden de las imágenes del array
function shuffle(a) {
    var j, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      //switch
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  }
  function renderizar() {
    //Mezcla imágenes
    shuffle(arrayFotos);
    //Obtengo elemento
    let contenido = document.getElementById("contenido");
    //Vacío contenido
    contenido.innerHTML = "";
    //Crea elementos img para asociar fotos(50)
    for (let i = 1; i <= 50; i++) {
      let img = document.createElement("img");
      img.setAttribute("src", arrayFotos[i]);
      contenido.appendChild(img);
    }
    //Aumento contador
    cont++;
    //Detengo el contador cuando hay un mayor número de pasadas que de este
    if (cont > PASADAS) {
      clearInterval(temp);
    }
  }
  async function cargarFotos() {
    try {
        //Solicito a la api el número de resultados establecido por la constante
      const resp = await fetch(`https://randomuser.me/api?results=${RESULTADOS}`);
      ////Convierte respuesta en datos json
      const datos = await resp.json();
      //Itera sobre la lista de personas obtenidas y 
      //agrega las URL de sus imágenes grandes a la matriz array.
      let listaPersonas = datos["results"];
      for (persona of listaPersonas) {
        arrayFotos.push(persona["picture"]["large"]);
      }
      //Establece un temporizador (setInterval) que ejecuta 
      //la función renderizar cada 200 milisegundos después de que las imágenes se cargan.
      temp = setInterval(renderizar, 200);
    } catch (error) {
      document.body.innerHTML = "<p>Error: " + error + "</p>";
    }
  }
  
  window.addEventListener("DOMContentLoaded", (e) => {
    cargarFotos();
  });
  
  