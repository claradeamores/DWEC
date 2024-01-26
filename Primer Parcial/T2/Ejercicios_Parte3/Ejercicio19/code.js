function abrirSelector() {
  nuevaVentana = window.open(
    "./selectorColor.html",
    "Selector",
    " width=300, height=300"
  );
}

function cambiarColor() {
  color = formulario.color.value;
  window.opener.document.body.style.background = color;
  window.close();
}
///Abrir con life server pq da problema el window.opener
