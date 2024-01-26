/*Crear una página html con un formulario y con un objeto select provincias con 4 provincias 
(option).
Crear un botón tal que al pulsarlo muestre en un alert la información de la provincia 
seleccionada: índice
del option seleccionado, descripción y valor.
Añadir otro objeto select multiple, provincias, pero que permita la selección multiple, y otro botón. Al
pulsarlo, mostrar por alert la descripción de las provincias seleccionadas.*/
//etiqueta select devuelve array
var provincias1;
var provincias2;
var boton1;
var boton2;
//función que devuelve los datos de un único valor
let unico = (e) => {
  e.preventDefault();
  //Una manera de acceder al array quedevueve el select, accediendo
  //dentro del array al índice seleccionado con selecIndex
  //texto = provincias1.options[provincias1.selectedIndex].text;
  //valor = provincias1.options[provincias1.selectedIndex].value;
  //indice = provincias1.options[provincias1.selectedIndex].index;
  let texto = "";
  let valor = "";
  let indice = "";
  for (let i = 0; i < provincias1.length; i++) {
    //escojo el valor seleccionado con el atributo selected igualándolo a true, para
    //saber cúal es el que está marcado
    if (provincias1.options[i].selected == true) {
      //accedo al valor del indice con index
      indice = provincias1.options[i].index;
      //accedo al valor del indice con text
      texto = texto + provincias1.options[i].text;
      //accedo al valor del indice con value
      valor = provincias1.options[i].value;
    }
  }
  //imprimo
  alert(
    `El índice de la provincia seleccionada es ${
      indice + 1
    }, su descripción es ${texto}, su valor es ${valor} `
  );
};
//Función que activa la selección múltiple con el atributo multiple de html poniéndolo en true
let desactivar = (e) => {
  e.preventDefault();
  provincias2.multiple = true;
};
//función que devuelve los datos de un múltiples valores, incluyendo la condición
// de que el atributo selected de html este en true, muestra el texto
let multiple = (e) => {
  e.preventDefault();
  seleccion = "Ciudades seleccionadas: ";
  for (let i = 0; i < provincias2.length; i++) {
    if (provincias2.options[i].selected == true) {
      seleccion = seleccion + " " + provincias2.options[i].text;
    }
  }
  alert(seleccion);
};

let inicio = (e) => {
  e.preventDefault();
  provincias1 = document.getElementById("s1");
  provincias2 = document.getElementById("s2");
  boton1 = document.getElementById("b1");
  boton2 = document.getElementById("b2");
  provincias2.addEventListener("click", desactivar);
  boton1.addEventListener("click", unico);
  boton2.addEventListener("click", multiple);
};
window.addEventListener("DOMContentLoaded", inicio);
