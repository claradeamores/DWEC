var $marcar;
var $desmarcar;
var $validar;
var $checkGusta;
var $check;
let marcado = (e) => {
  e.preventDefault();
  //Marco la opción poniendo elatributo checked de html en true
  $checkGusta.checked = true;
};
let desmarcado = (e) => {
  e.preventDefault();
  //desmarco la opción poniendo elatributo checked de html en false
  $checkGusta.checked = false;
};
let validado = (e) => {
  e.preventDefault();
  totalMarcados = 0;
  //creo un for para calcular los valores escogidos cuando el atributo
  //check de htm está marcado
  for (let i = 0; i < $check.length; i++) {
    if ($check[i].checked == true) {
      totalMarcados++;
    }
  }
  //añado mensaje en alert
  if (totalMarcados > 3) {
    alert(`Total de elementos marcados ${totalMarcados}`);
  } else {
    alert("Se han marcado menos de tres elementos");
  }
};

let inicio = () => {
  $marcar = document.getElementById("b1");
  $desmarcar = document.getElementById("b2");
  $validar = document.getElementById("b3");
  $checkGusta = document.getElementById("c1");
  $check = document.form1.ch;
  $marcar.addEventListener("click", marcado);
  $desmarcar.addEventListener("click", desmarcado);
  $validar.addEventListener("click", validado);
};
window.addEventListener("DOMContentLoaded", inicio);
