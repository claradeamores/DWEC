let num = prompt("Dime un número");
if (isNaN(parseInt(num))) {
  alert("Debe ser un número");
} else {
  for (i = 0; i <= 100; i += 1) {
    let num2 = parseInt(num) + i;
    if (num2 % 2 != 0) {
      document.write(num2 + "<br>");
    }
  }
}
