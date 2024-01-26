/*Crear un formulario con un input de tipo fecha y 3 input de tipo text: nombre, apellido1 y apellido2.
Asignarle un valor por defecto a los texto. Recuperar en javascript todos los nombres (atributo name)de
los elementos del formulario y mostrarlos con alert. Después mostrar con alert sólo los input de tipo
text.
Añadir al ejercicio anterior, un alert para obtener el valor del nombre y del apellido 1 y apellido 2 juntos, a
través del id de cada campo.
Añadir al ejercicio anterior, un alert para obtener el valor del nombre, y del apellido 1 y apellido 2 juntos,
a través del atributo name de cada campo.
 */
//creo variables por id
$form = document.getElementById("f1");
$fecha = document.getElementById("i1");
$nombre = document.getElementById("i2");
$apellido1 = document.getElementById("i3");
$apellido2 = document.getElementById("i4");
//creo los alerts accediendo al atributo name desde las variables
alert($fecha.name);
alert($nombre.name);
alert($apellido1.name);
alert($apellido2.name);
var cadena = "";
//$form.elements.length, el form devuelve un arry de valores y accedo a ellos
//con elements(solo con forms)
for (var i = 0; i < $form.elements.length; i++) {
  //compruebo si el type del imput es un texto
  if ($form.elements[i].type == "text") {
    //creo una variable que me recoje los valores que cumplan la condición
    var elementos = $form.elements[i].value;
    cadena += elementos + " ";
  }
}
alert(cadena);
alert(
  form1.nombre.value + " " + form1.apellido1.value + " " + form1.apellido2.value
);
