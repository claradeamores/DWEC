/**
 * Función que realiza la petición fetch y coloca el mapa en el documento
 * en el elemento indicado
 * @param {string} apikey
 * @param {Element} elemento Contenedor de la imagen y el formulario
 * */
async function procesarFetch() {
  let mapaTotal = document.getElementById("mapa");
  let clave = document.getElementById("apikey").value;

  var headers = new Headers({
    "cache-control": "no-cache",
  });
  var conf = {
    method: "GET",
    mode: "cors",
    headers: headers,
  };
  try {
    const resp1 = await fetch(
      "https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=" +
        clave,
      conf
    );

    const data1 = await resp1.json();
    const resp2 = await fetch(data1.datos, conf);
    const mapa = await resp2.blob();

    const img = document.createElement("img");
    img.setAttribute("src", URL.createObjectURL(mapa));
    //Añadimos la imagen y quitamos el formulario

    mapaTotal.appendChild(img);
  } catch (error) {
    let p = document.createElement("p");
    p.innerHTML = "<strong>Error al cargar el mapa:</strong> " + error;
    mapaTotal.appendChild(p);
  }
}

//Código principal dentro del evento load
// para asegurar la carga de los componentes
window.addEventListener("DOMContentLoaded", (ev) => {
  let boton = document.getElementById("b1");

  boton.addEventListener("click", (ev) => {
    ev.preventDefault();
    procesarFetch();
  });
});
