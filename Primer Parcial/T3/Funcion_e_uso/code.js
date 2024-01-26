alertar = (e) => {
  //hace que el evento por defecto se deshabilite
  e.preventDefault();
  //te dice que tipo de evento es
  alert(e.type);
  //te dice la etiqueta html que produce el evento
  alert(e.target);
  //cambia el texto del contenido de la etiqueta
  e.target.style.color = "blue";
  //cambia el borde de la etiqueta
  e.target.style.borderColor = "blue";
  e.target.style.borderWidth = "25pt";
};
document.getElementById("mienlace").addEventListener("click", alertar);
