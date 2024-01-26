let inicio = () => {
  let enviar = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://yesno.wtf/api");

    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState !== 4) return;

      if (xhr.status === 0) {
        console.error("Error de red: la solicitud no pudo completarse");
        let contenedor = document.getElementById("p2");
        contenedor.innerHTML = "Error de red";
      } else if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Éxito");

        let json = JSON.parse(xhr.responseText);
        let imagen = document.createElement("img");
        imagen.src = json.image;

        // Limpiar contenido anterior
        let contenedor = document.getElementById("p2");
        contenedor.innerHTML = "";
        contenedor.appendChild(imagen);
      } else {
        console.error(
          `Error ${xhr.status}: ${xhr.statusText || "Ocurrió un error"}`
        );
        let contenedor = document.getElementById("p2");
        contenedor.innerHTML = `Error ${xhr.status}: ${xhr.statusText || "Ocurrió un error"}`;
      }

      console.log("Este mensaje cargará de cualquier forma");
    });

    xhr.send();
  };

  document.getElementById("b2").addEventListener("click", enviar);
};

window.addEventListener("DOMContentLoaded", inicio);
