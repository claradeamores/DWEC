/*. Crear una pagina y que cada segundo cambie de color el fondo: naranja / azul hasta
pulsar un botón Detener */
temp1 = setInterval(intervalo, 1000);
function intervalo() {
  let fondo = document.body.style.backgroundColor;
  if (fondo == "orange") {
    document.body.style.backgroundColor = "blue";
  } else document.body.style.backgroundColor = "orange";
}
function parar() {
  clearInterval(temp1);
}
