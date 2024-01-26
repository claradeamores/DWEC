/*Escribe un programa que pida por mensaje prompt un tipo de topping para comprar un helado. Los valores
serán: oreo/kitkat/brownie/lacasitos
Se tendrá que mostrar por pantalla el precio del helado de forma que:
1. El helado sin topping cuesta 1.90€.
2. El topping de oreo cuesta 1€.
3. El topping de kitkat cuesta 1.50€.
4. El topping de brownie cuesta 0.75€.
5. El topping de lacasitos cuesta 0.95€.
6. En caso de no disponer del topping solicitado por el usuario el programa escribirá por pantalla “No
tenemos este topping, lo sentimos” y a continuación informar del precio del helado sin ningun topping.
7. Si tiene el topping, el programa escribe por consola el precio del helado con el topping seleccionado.*/
topping = prompt(
  "Dime que topping quieres en tu helado:oreo, kitkat, brownie, lacasitos"
).toLowerCase();
helado = 1.9;
valor = 0;
switch (topping) {
  case "oreo":
    valor = Number(helado + 1).toFixed(2);
    document.write("El precio de tu helado es " + valor + " Euros");
    break;
  case "kitkat":
    valor = Number(helado + 1.5).toFixed(2);
    document.write("El precio de tu helado es " + valor + " Euros");
    break;
  case "brownie":
    valor = Number(helado + 0.75).toFixed(2);
    document.write("El precio de tu helado es " + valor + " Euros");
    break;
  case "lacasitos":
    valor = Number(helado + 0.95).toFixed(2);
    document.write("El precio de tu helado es " + valor + " Euros");
    break;

  default:
    document.write(
      "No tenemos ese topping, lo sentimos. El helado sin topping cuesta " +
        helado
    );
}
