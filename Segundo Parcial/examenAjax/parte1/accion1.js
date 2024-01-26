let inicio = () => {
  document.getElementById("b1").addEventListener("click", cargarReceta);
};
let cargarReceta = (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.themealdb.com/api/json/v1/1/random.php");
  xhr.send();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {
      try {
        let json = JSON.parse(xhr.responseText);
        let recetas = json.meals;
        document.getElementById("recipeTitle").innerHTML = recetas[0].strMeal;
        let datos = document.getElementById("datos");
        datos.innerHTML = "<img src='" + recetas[0].strMealThumb + "'/>";

        let listaIngredientes = document.createElement("ol");
        for (let i = 1; i <= 20; i++) {
          let dat = recetas[0];
          if (dat["strIngredient" + i] != "" && dat["strIngredient" + i] != null) {
            let ingrediente = document.createElement("li");
            ingrediente.innerHTML = dat["strIngredient" + i];
            listaIngredientes.appendChild(ingrediente);
          }
        }

        datos.appendChild(listaIngredientes);
        let enlace = document.createElement("a");
        enlace.innerHTML = "Web de la receta";
        enlace.href=recetas[0].strSource;
        enlace.target = recetas[0].strSource
        datos.appendChild(enlace);
      } catch (error) {
        console.error("Error al parsear JSON:", error.message);
      }
    } else {
      let message = xhr.statusText || "Error al obtener receta";
      datos.innerHTML = `Error ${xhr.status}: ${message}`;
    }
  });
};
window.addEventListener("DOMContentLoaded", inicio);
