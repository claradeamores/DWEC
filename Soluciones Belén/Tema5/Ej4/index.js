// Function to make the API request
fetchClues = () => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jservice.io/api/clues", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var clues = JSON.parse(xhr.responseText);
      displayClues(clues);
    }
  };
  xhr.send();
};

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

window.addEventListener("DOMContentLoaded", fetchClues);
