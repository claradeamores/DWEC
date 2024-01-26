/*12.- Crear 3 parrafos con <p> con los id= contenidos_1, contenidos_2 y contenidos_3. 
Detrás de cada
párrafo, poner un enlace <a> con el texto ‘Ocultar Contenido’ y con sus id= enlace_1, enlace_2 
y
enlace_3.
Realizar un programa que desde código javascript al pulsar un enlace se ocultará el texto del
parrafo.correspondiente. Cuando se oculte el texto del enlace deberá mostrar ‘Mostrar Contenido’ y al
pulsarlo se visualizará el parrafo volviendo a mostrar el enlace el texto ‘ocultar contenido’*/
//Bucle para crear cpntenido
for (let i = 1; i < 4; i++) {
  //creo elemento p
  var par = document.createElement("p");
  //le añado un atributo id
  par.id = "contenido_" + i;
  //Creo el texto del p
  var textoP = document.createTextNode(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend sollicitudin condimentum. Mauris vulputate elit quam, at laoreet elit varius eu. Morbi et bibendum libero, eget tincidunt ligula. Donec fermentum vestibulum sollicitudin. Donec eget ullamcorper nisl, ac suscipit tellus. Curabitur ac mi vitae lorem imperdiet rutrum. Praesent porta arcu ut nisl suscipit lobortis. Morbi a dapibus neque, nec bibendum ligula. Aenean aliquet lacus eget nibh semper ornare."
  );
  //le añado al texto al párrafo
  par.appendChild(textoP);
  //le añado un salto de línea
  var salto = document.createElement("br");
  par.appendChild(salto);
  //creo elemento a
  var enlace = document.createElement("a");
  //le asigno un atributo id
  enlace.id = "enlace_" + i;
  //Creo un enlace vacío con atributo href
  enlace.href = "#";
  //creo texto de enlace
  var textoE = document.createTextNode("Ocultar Contenido");
  //le añado el texto al enlace
  enlace.appendChild(textoE);
  // Añade el enlace al párrafo
  par.appendChild(enlace);
  // Añade el párrafo al body
  document.body.appendChild(par);
}
var enlace1 = document.getElementById("enlace_1");
var enlace2 = document.getElementById("enlace_2");
var enlace3 = document.getElementById("enlace_3");
var par1=document.getElementById("contenido_1");
var par2=document.getElementById("contenido_2");
var par3=document.getElementById("contenido_3");
//funcion para cambiar
let cambios = (enlace, parrafo) => {
  if(enlace.innerHTML=="Ocultar Contenido"){
    parrafo.style.visibility="hidden";
    enlace.innerHTML="Mostrar contenido";
    enlace.style.visibility="visible";  
  }
  else{
    parrafo.style.visibility="visible";    
    enlace.innerHTML="Ocultar contenido";
  }
};
//adicion de eventos, asigno funcion vacia ya que tengo que introducir parámetros
enlace1.addEventListener("click", ()=>cambios(enlace1,par1));
enlace2.addEventListener("click", ()=>cambios(enlace2,par2));
enlace3.addEventListener("click", ()=>cambios(enlace3,par3));
