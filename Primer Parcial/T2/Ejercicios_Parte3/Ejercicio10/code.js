/*Genera 10 números aleatorios entre 0 y 20 (incluido) y calcula la suma de ellos.
Debe mostrar por pantalla: “La suma de los numeros xxxxx es x*/
num2 = 0;
cadena = "";
for (let i = 0; i < 10; i++) {
  num = parseInt(Math.random() * 21);
  cadena += num + " ";

  num2 += num;
}
document.write("La suma de " + cadena + " es: " + num2);
