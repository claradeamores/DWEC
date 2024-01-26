// Function to make the API request
fetchClues = () => {
  fetch("https://jservice.io/api/clues")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener la imagen");
      }
      return response.json();
    })
    .then((data) => {
      displayClues(data);
    })
    .catch((error) => console.error("Error:", error.message));
};

// Function to display clues in a list
function displayClues(clues) {
  alert(clues);
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
