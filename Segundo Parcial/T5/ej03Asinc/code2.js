let inicio = () => {
  document.getElementById("b2").addEventListener("click", yesNo);
};

async function yesNo() {
  try {
    const respuesta = await fetch("https://yesno.wtf/api");

    if (!respuesta.ok) {
      throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
    }

    const json = await respuesta.json();

    // Limpiar contenido anterior de "p2"
    document.getElementById("p2").innerHTML = "";

    let imagen = document.createElement("img");
    imagen.src = json.image;

    // Agregar la nueva imagen al elemento "p2"
    document.getElementById("p2").appendChild(imagen);

    document.getElementById("p1").innerHTML = "Respuesta: " + json.answer;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById("p1").innerHTML = "Error al obtener la respuesta";
  }
}

window.addEventListener("DOMContentLoaded", inicio);
