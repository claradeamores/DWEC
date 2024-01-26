let inicio=()=>{
document.getElementById("b1").addEventListener("click", cargarMapa);

function cargarMapa(e) {
    e.preventDefault();
    var apiKey = document.getElementById("apiKey").value;
    var url = "https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=" + apiKey;

    var headers = new Headers({ "cache-control": "no-cache" });
    var conf = {
        method: "GET",
        mode: "cors",
        headers: headers,
    };

    fetch(url, conf)
        .then(response => response.json())
        .then(data => {
            var datosUrl = data.datos;
            return fetch(datosUrl, conf);
        })
        .then(response => response.blob())
        .then(mapa => {
            var mapaDiv = document.getElementById("mapa");
            var img = document.createElement("img");
            img.setAttribute("src", URL.createObjectURL(mapa));
            img.style.width="500px";
            img.style.height="550px";
            mapaDiv.innerHTML = ""; 
            mapaDiv.appendChild(img);
        })
        .catch(error => {
            var mapaDiv = document.getElementById("mapa");
            mapaDiv.innerHTML = "Error al cargar el mapa. Verifica tu clave API.";
            console.error("Error:", error);
        });
}}
window.addEventListener("DOMContentLoaded", inicio)
