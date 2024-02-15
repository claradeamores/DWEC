// Function to make the XMLHttpRequest
function fetchData() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var data = JSON.parse(xhr.responseText);
      displayData(data.students);
    }
  };
  xhr.send();
}

// Function to calculate the average of grades
function calculateAverage(grades) {
  var sum = 0;
  grades.forEach(function (elemento) {
    sum += elemento;
  });
  return (sum / grades.length).toFixed(2);
}

// Function to display data in HTML
function displayData(students) {
  var tableBody = document.getElementById("studentTable");

  students.forEach(function (student) {
    var row = tableBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = student.id;
    cell2.innerHTML = student.name;
    cell3.innerHTML = student.grades.join(", ");
    cell4.innerHTML = calculateAverage(student.grades);
  });
}

// Fetch and display data when the page loads
document.addEventListener("DOMContentLoaded", fetchData);
