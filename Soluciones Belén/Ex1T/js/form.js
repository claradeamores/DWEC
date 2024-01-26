let receta = {
  nombre: "Tarta de Manzana",
  ingredientes: ["manzanas", "azúcar", "harina", "canela", "huevo"],
  pasos: [
    "Pelar y cortar las manzanas en rodajas.",
    "Mezclar las manzanas con azúcar y canela.",
    "Preparar la masa con harina y huevo.",
    "Forrar un molde con la masa.",
    "Colocar las manzanas en el molde.",
    "Hornear a 180°C durante 30 minutos.",
  ],
};

mostrarIngredientes = () => {
  var resultadoDiv = document.getElementById("resultadoDiv");
  resultadoDiv.innerHTML = "<h3>Ingredientes:</h3>";
  var ul = document.createElement("ul");
  receta.ingredientes.forEach(function (ingrediente) {
    var li = document.createElement("li");
    li.textContent = ingrediente;
    ul.appendChild(li);
  });
  resultadoDiv.appendChild(ul);
};

mostrarPasos = () => {
  var resultadoDiv = document.getElementById("resultadoDiv");
  resultadoDiv.innerHTML = "<h3>Pasos:</h3>";

  var table = document.createElement("table");

  receta.pasos.forEach(function (paso, index) {
    var fila = document.createElement("tr");
    var col = document.createElement("td");
    col.textContent = paso;

    col.style.border = "solid 1px";
    fila.appendChild(col);
    fila.style.color = "green";

    var col2 = document.createElement("td");
    var check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.addEventListener("click", cambiar);
    check.setAttribute("id", index);
    col2.appendChild(check);
    col2.style.border = "solid 1px";

    fila.appendChild(col2);
    table.appendChild(fila);

    if (index == 0) {
      check.disabled = false;
    } else {
      check.disabled = true;
    }
  });
  resultadoDiv.appendChild(table);
};

cambiar = (e) => {
  e.target.disabled = true;
  if (e.target.parentNode.parentNode.nextElementSibling == null) {
    alert("Enhorabuena, sólo falta el tiempo del horno!");
  } else {
    e.target.parentNode.parentNode.nextElementSibling.children[1].children[0].disabled = false;
  }
};

var tiempoRestante;

tiempo = () => {
  tiempoRestante = 10;
  temporizadorInterval = setInterval(function () {
    tiempoRestante--;
    actualizarTemporizador();

    if (tiempoRestante == 5) {
      audio = document.getElementById("myAudio");
      audio.play();
    }
    if (tiempoRestante <= 0) {
      audio.pause();
      audio.currentTime = 0;
      clearInterval(temporizadorInterval);
      alert("¡Saca la tarta del horno!");
    }
  }, 1000);
};

function actualizarTemporizador() {
  document.getElementById("resultadoDiv").textContent =
    "Tiempo restante: " + tiempoRestante + " segundos";
}

inicio = () => {
  document
    .getElementById("ingredientes")
    .addEventListener("click", mostrarIngredientes);

  document.getElementById("pasos").addEventListener("click", mostrarPasos);

  document.getElementById("horno").addEventListener("click", tiempo);
};

window.addEventListener("DOMContentLoaded", inicio);
