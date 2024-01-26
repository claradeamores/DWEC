let inicio = () => {
  document.getElementById("b1").addEventListener("click", mostrarAleatorio);
  contenido = document.getElementById("contenido");
};

let mostrarAleatorio = (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://randomuser.me/api/");
  xhr.send();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        let json = JSON.parse(xhr.responseText);
        console.log(json);

        let resultados = json.results;
        resultados.forEach((resultado) => {
          contenido.innerHTML =
            "<p>Nombre " +
            resultado.name.first +
            " " +
            resultado.name.last +
            "</p><p>Email: " +
            resultado.email +
            "</p><p>Ciudad: " +
            resultado.location.city +
            "</p><img src='" +
            resultado.picture.large +
            "' alt='Foto persona'>";
        });

        console.log("Este mensaje cargará de cualquier forma");
      } catch (error) {
        console.error("Error al parsear JSON:", error.message);
      }
    } else {
      console.log("Error en la solicitud");
      let message = xhr.statusText || "Ocurrió un error";
      contenido.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
};

window.addEventListener("DOMContentLoaded", inicio);
