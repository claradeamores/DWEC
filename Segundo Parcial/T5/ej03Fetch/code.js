let inicio = () => {
  document.getElementById("b1").addEventListener("click", yesNo);
};

function yesNo() {
  fetch("https://yesno.wtf/api")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error: No se pudo obtener los datos");
      }
      return respuesta.json();
    })
    .then((json) => {
      document.getElementById("p1").innerHTML = "Respuesta: " + json.answer;
    })
    .catch((error) => {
      console.error('Error:', error);
      document.getElementById("p1").innerHTML = "Error al obtener la respuesta";
    });
}

window.addEventListener("DOMContentLoaded", inicio);
