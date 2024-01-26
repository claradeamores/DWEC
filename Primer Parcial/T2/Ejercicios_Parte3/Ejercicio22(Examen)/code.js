function abrirDatos() {
  nuevaVentana = window.open("./datos.html", "datos", " width=800, height=500");
}
function cerrar() {
  window.close();
}
function imprimir() {
  nombre = formulario2.nombre.value;
  apellidos = formulario2.apellido.value;
  fecha = new Date(formulario2.fecha.value);

  window.opener.document.body.write("<p>Nombre: " + nombre + " </p><br>");
  window.opener.document.body.write("<p>Apellidos: " + apellido + " </p><br>");
  window.opener.document.body.write(
    "<p>Fecha de nacimiento: " + fecha + " </p><br>"
  );
  temp = setTimeout(cerrar());
}
