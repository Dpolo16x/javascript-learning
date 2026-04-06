/*Crear un programa en JavaScript que, según el valor de la variable edad, determine y muestre el tipo de ingreso de una persona:
≥ 65 → pensión
18 a 64 → salario
< 18 → subsidio
Otro caso → valor no numérico*/

var edad =83;
if(edad>=65 ){
    console.log("Obtienes tus ingresos de tu pensión")
}
else if(edad<65 && edad>=18){
        console.log("Cada mes recibes un salario")
}
else if(edad<18){
    console.log('Recibes un subsidio')
}
else {
  console.log("El valor de la variable edad no es numérico");
}

var day = "Sunday";

switch (day) {
  case "Monday":
    console.log("Trabajo y estudio");
    break;

  case "Tuesday":
    console.log("Voy al gimnasio");
    break;

  case "Wednesday":
    console.log("Estudio programación");
    break;

  case "Thursday":
    console.log("Hago tareas");
    break;

  case "Friday":
    console.log("Salgo con amigos");
    break;

  case "Saturday":
    console.log("Descanso");
    break;

  case "Sunday":
    console.log("Paso tiempo en familia");
    break;

  default:
    console.log("There is no such day");
}

  if(i <= 5) {
    console.log("Hello");
  } else if(i <= 10) {
    console.log("Goodnight");
  } else {
    console.log("Goodbye");
  }

  var i = 7;
  var j = 2;

  if(i < 7 || j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
  var i = 3;
  var j = 5;

  if(i == 3 && j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }

