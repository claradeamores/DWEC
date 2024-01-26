// Function to make the API request
async function fetchaClues() {
  try {
    const response = await fetch("https://jservice.io/api/clues");

    if (!response.ok) {
      throw new Error("Error al obtener la imagen");
    }

    const data = await response.json();
    displayClues(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Function to display clues in a list
function displayClues(clues) {
  var clueList = document.getElementById("clueList");

  clues.forEach(function (clue) {
    var clueItem = document.createElement("li");
    clueItem.className = "clue";
    clueItem.innerHTML = `<strong>Category:</strong> ${clue.category.title}<br>
                      <strong>Question:</strong> ${clue.question}<br>
                      <strong>Answer:</strong> ${clue.answer}`;
    clueList.appendChild(clueItem);
  });
}
window.addEventListener("DOMContentLoaded", fetchaClues);
