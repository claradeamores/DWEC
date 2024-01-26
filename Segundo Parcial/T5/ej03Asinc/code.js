let inicio = () => {
    document.getElementById("b1").addEventListener("click", yesNo);
};

async function yesNo() {
    try {
        const respuesta = await fetch('https://yesno.wtf/api');

        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
        }

        const json = await respuesta.json();
        document.getElementById("p1").innerHTML = "Respuesta: " + json.answer;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById("p1").innerHTML = "Error al obtener la respuesta";
    }
}

window.addEventListener("DOMContentLoaded", inicio);
