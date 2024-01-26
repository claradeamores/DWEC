async function getPosts() {
  try {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await respuesta.json();
    const tableBody = document.getElementById("postsTableBody");
    tableBody.innerHTML = " ";

    json.forEach(post => {
      const row = tableBody.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      cell1.textContent = post.title;
      cell2.textContent = post.body;
    });

    if (!respuesta.ok) {
      throw new Error('Error al obtener los posts');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

let inicio = () => {
  document.getElementById("boton").addEventListener("click", getPosts);
};

window.addEventListener("DOMContentLoaded", inicio);
