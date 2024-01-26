let tipo = prompt("Dime el tipo de motor: 1, 2, 3 o 4");
if(Number(tipo)==0){
    document.write("No hay un valor establecido para ese tipo de bomba");
    }
else if (Number(tipo)==1){
    document.write("La bomba es una bomba de agua");
}
else if (Number(tipo)=2){
    document.write("La bomba es una bomba de gasolina");
}
else if (Number(tipo)==3){
    document.write("La bomba es una bomba de hormigón");
}
else if (Number(tipo)==4){
    document.write("La bomba es una bomba de pasta alimenticia");
}
else {
    document.write("No existe un valor definido para ese tipo de bomba");
}
