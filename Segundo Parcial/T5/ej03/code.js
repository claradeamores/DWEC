/* Crear una página html con  un <h1> ¿Sí o No?. Tendrá un botón y 
un p para mostrar ahí la respuesta.
Cuando pulsemos el botón, se conectará con la api yesno.wtf/api 
para obtener la respuesta Si o No.
Crear otra página html2 igual a la anterior, tal que al pulsar el botón, 
cargaremos en el resultado la imagen que
devuelva.*/
let inicio = () => {
  let enviar = (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://yesno.wtf/api");

    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState !== 4) return;

      if (xhr.status === 0) {
        console.error("Error de red: la solicitud no pudo completarse");
      } else if (xhr.status >= 200 && xhr.status < 300) {
        console.log("Éxito");

        let json = JSON.parse(xhr.responseText);
        document.getElementById("p1").innerHTML = json.answer;
      } else {
        console.error(
          `Error ${xhr.status}: ${xhr.statusText || "Ocurrió un error"}`
        );
      }

      console.log("Este mensaje cargará de cualquier forma");
    });

    xhr.send();
  };

  document.getElementById("b1").addEventListener("click", enviar);
};

window.addEventListener("DOMContentLoaded", inicio);
