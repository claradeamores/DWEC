/*- Dada la siguiente lista en html: Añadir un botón que al pulsarse añada un elemento nuevo li a la
lista.*/
var cuerpo=document.getElementsByTagName("body");
var lista=document.getElementById("lista");
var boton=document.createElement("input");
boton.type="button";
boton.value="Añadir elemento";
boton.id="boton1";
cuerpo[0].appendChild(boton);
let anyadir=(e)=>{
    e.preventDefault();
    var partesLista=document.createElement("li");
    var texto=document.createTextNode("Elemento");
    partesLista.appendChild(texto);
    lista.appendChild(partesLista);   
}
document.addEventListener("click", anyadir);
