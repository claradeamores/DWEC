/*Crea una tabla bidimensional de longitud 5x15. 
Carga la tabla con dos únicos valores 0 y 1, donde, el valor
uno ocupará las posiciones de los elementos que delimitan la tabla, 
es decir, las mas externas, mientras que
el resto de los elementos contendrán el valor 0.
Imprimir la tabla por pantalla:
1111111111111111
100000000000001
100000000000001
100000000000001
1111111111111111
Utilizar un método que cree la tabla: creaMatriz() y 
otro que la pinte por pantalla: pintaTabla()*/
// Función para crear la matriz
let crearMatriz = (filas, columnas) => {
  let a = 0;
  let b = 1;
  let matriz = new Array(filas);

  for (let i = 0; i < filas; i++) {
    matriz[i] = new Array(columnas);
    for (let j = 0; j < columnas; j++) {
      if (i === 0 || i === filas - 1 || j === 0 || j === columnas - 1) {
        matriz[i][j] = b;
      } else {
        matriz[i][j] = a;
      }
    }
  }

  return matriz;
};

// Función para imprimir la tabla por pantalla
let pintaTabla = (a) => {
  for (let i = 0; i < a.length; i++) {
    document.write(a[i].join(" ") + "<br><br>");
  }
};

// Creo la matriz de 5 x 15 llamando a la funcion
let matriz2 = crearMatriz(5, 15);

// Imprimir la tabla por pantalla llamando a la función;
pintaTabla(matriz2);
