/*Dada una cadena mostrarla al revés por pantalla
Ej: “Hoy es viernes” mostrar: ”senreiv se yoH”*/
let cadena=prompt("Indique una frase para mostrársela al revés");
let cadenaNueva;

for(let i=cadena.length-1; i>=0; i--){
    cadenaNueva=cadena[i];
    document.write(cadenaNueva);    
}
