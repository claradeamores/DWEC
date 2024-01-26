/*13.- Crear un botón dentro de una etiqueta section (<section id="ContentFormulario">)
de tal forma que al pulsarlo, desde javascript se genere un formulario. 
Dicho formulario debe tener los
siguientes atributos: una anchura de 300px, un action a la página de google y 
el method será get.
Además, el formulario debe contener:
- Un input de tipo text para el nombre, con el atributo placeholder ‘Nombres’ y un estilo:
width:100%;margin: 10px 0px;padding: 5px
- Un input de tipo text para los apellidos, con el atributo placeholder ‘Apellidos’ y un estilo:
width:100%;margin: 10px 0px;padding: 5px 
- Un input de tipo text para el email, con el atributo placeholder ‘Email’ y un estilo:
width:100%;margin: 10px 0px;padding: 5px
- Un input de tipo text para el asunto, con el atributo placeholder ‘Asunto’ y un estilo:
width:100%;margin: 10px 0px;padding: 5px
- Un input de tipo text para el Mensaje, con el atributo placeholder ‘Mensaje’ y un estilo:
width:100%;height:200px;margin: 10px 0px;padding: 5px
- Un botón con el valor ‘Enviar’ con estilo width:100px;margin: 10px 0px;padding:
10px;background:#F05133;color:#fff;border:solid 1px #000;
 y con un mensaje de alert cuando se pulse
el botón.*/
var inicio = () => {
  sec = document.getElementById("ContentFormulario");
  var botonForm = document.getElementById("generar");
  botonForm.addEventListener("click",crear );
};
var sec;
var formu;
var nombre;
var apellido;
var email;
var asunto;
var mensaje;
var envio;

var enviar = (e) => {
  e.preventDefault();
  alert("Has pulsado enviar");
};
var crear = (e) => {
    e.preventDefault();
    formu = document.createElement("form");
    formu.width = "300px";
    formu.action = "https://www.google.es";
    formu.method = "get";
    nombre = document.createElement("input");
    nombre.type = "text";
    nombre.placeholder = "Nombre";
    nombre.style.width = "100%";
    nombre.style.margin = "10px 0px";
    nombre.style.padding = "5px";
    formu.appendChild(nombre);
    apellido = document.createElement("input");
    apellido.type = "text";
    apellido.placeholder = "Apellidos";
    apellido.style.width = "100%";
    apellido.style.margin = "10px 0px";
    apellido.style.padding = "5px";
    formu.appendChild(apellido);
    email = document.createElement("input");
    email.type = "text";
    email.placeholder = "Email";
    email.style.width = "100%";
    email.style.margin = "10px 0px";
    email.style.padding = "5px";
    formu.appendChild(email);
    asunto = document.createElement("input");
    asunto.type = "text";
    asunto.placeholder = "asunto";
    asunto.style.width = "100%";
    asunto.style.margin = "10px 0px";
    asunto.style.padding = "5px";
    formu.appendChild(asunto);
   mensaje = document.createElement("input");
    mensaje.type = "textarea";
    mensaje.placeholder = "Mensaje";
    mensaje.style.width = "100%";
    mensaje.style.height = "200px";
    mensaje.style.margin = "10px 0px";
    mensaje.style.padding = "5px";
    formu.appendChild(mensaje);
    envio = document.createElement("input");
    envio.type="button";
    envio.value = "Enviar";
    envio.id="envio";
    envio.style.width = "100px";
    envio.style.margin = "10px 0px";
    envio.style.padding = "10px";
    envio.style.background = "#F05133";
    envio.style.background = "#F05133"; 
    envio.addEventListener("click", enviar);   
    formu.appendChild(envio);  
    sec.appendChild(formu);
    
  };
document.addEventListener("DOMContentLoaded",inicio);