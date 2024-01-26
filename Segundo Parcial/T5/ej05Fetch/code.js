let inicio = () => {
  let cuerpo = document.getElementById("cuerpoTabla");

  fetch("datos.json")
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error("Error: No se pudo obtener los datos");
      }
      return respuesta.json();
    })
    .then((json) => {
      let estudiantes = json.students;
      estudiantes.forEach((el) => {
        let media = 0;
        let suma = 0;
        let fila = document.createElement("tr");

        let colIdC = document.createElement("td");
        colIdC.innerHTML = el.id;
        fila.appendChild(colIdC);

        let ColNombreC = document.createElement("td");
        ColNombreC.innerHTML = el.nombre;
        fila.appendChild(ColNombreC);

        let ColNotasC = document.createElement("td");
        ColNotasC.innerHTML = el.notas.toString();
        fila.appendChild(ColNotasC);

        for (let i = 0; i < el.notas.length; i++) {
          suma += el.notas[i];
        }

        media = suma / el.notas.length;
        media = parseFloat(media).toFixed(2);

        let ColMediaC = document.createElement("td");
        ColMediaC.innerHTML = media;
        fila.appendChild(ColMediaC);

        cuerpo.appendChild(fila);
      });
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};

window.addEventListener("DOMContentLoaded", inicio);
