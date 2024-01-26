/*Escribir en una página web 500 números aleatorios del 1 al 10.000 y que al lado diga si es
par o no. Hacer una función flecha que dado un número devuelva “par” si es par o “impar” si es impar.
*/
//realizo una función flecha para comprobar que la variable recibida es un número par o impar
let parImpar = (a) => {
  if (a % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
};

for (let i = 1; i <= 500; i++) {
  //Extraccion de números aleatorios en cada iteracion
  num = Math.floor(Math.random() * 10000) + 1;
  document.write(i + ". El número " + num + " es " + parImpar(num) + "<br>");
}
