/*Crear un fichero local json formado por un campo “students” 
que será un array de objetos literales. Dentro de
cada uno habrá información de cada alumno: id: numero, nombre:cadena y notas, 
que será un array de 4 notas.
Crear datos para 5 alumnos en el fichero.
Crear una tabla con la información de los alumnos con 4 columnas: 
ID , nombre, notas, que apareceran separadas
por comas y la última columna será la media de notas.*/
let inicio = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "datos.json", true);
  xhr.send();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      let json = JSON.parse(xhr.responseText);
      let estudiantes = json.students;

      // Verificar si la tabla ya existe antes de crearla
      let tablaExistente = document.getElementById("tablaEstudiantes");
      if (tablaExistente) {
        tablaExistente.parentNode.removeChild(tablaExistente);
      }

      let tabla = document.createElement("table");
      tabla.id = "tablaEstudiantes";
      tabla.innerHTML = `
        <thead>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>NOTAS</th>
          <th>MEDIA</th>
        </thead>
        <tbody>
          ${estudiantes.map((el) => {
            let suma = el.notas.reduce((acc, nota) => acc + nota, 0);
            let media = (suma / el.notas.length).toFixed(2);

            return `
              <tr>
                <td>${el.id}</td>
                <td>${el.nombre}</td>
                <td>${el.notas.join(', ')}</td>
                <td>${media}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      `;

      document.body.appendChild(tabla);
    } else {
      console.error(`Error: ${xhr.status}`);
    }
  });

  xhr.addEventListener("error", () => {
    console.error("Error de red. No se pudo obtener los datos.");
  });
};

window.addEventListener("DOMContentLoaded", inicio);
