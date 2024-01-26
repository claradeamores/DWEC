let num;
do {
  num = prompt("Dime un número entre 0 y 23");
  if (isNaN(parseInt(num))) {
    alert("Debe ser un número");
  } else {
    if (num >= 6 && num <= 11) {
      document.write("Buenos días");
    } else if (num >= 12 && num <= 20) {
      document.write("Buenas tardes");
    } else {
      document.write("Buenas noches");
    }
  }
} while (num < 0 || num > 23);
