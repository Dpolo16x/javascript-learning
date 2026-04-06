//secciones de codigo que se ejecutan cuando la condicion es valida 
/*if y else:
    if: ejecuta una serie de codigo solo si la condicion es verdadera

 sintaxis: 
        if (condicion) {
            código si es true
        } cierre al mismo nivel de if(indentacion)

else if:Permite evaluar múltiples condiciones después de un if
    sintaxis:
            if (condicion1) {
                código si condicion1 es true
            } else if (condicion2) {
                código si condicion2 es true
            } else {
                código si ninguna se cumple
            }


else:Ejecuta un bloque de código cuando la condición del if y del else if es falsa (false)
    sintaxis:
        if (condicion) {
        código si es true
        } 
        else {
        código si es false
        }


*/
/*ejemplo de uso con ambas
 si la persona tiene 18 o mas puede ebtrar a la disco de lo contrario no podra
 uso de IF y ELSE
*/ 
let edad=17;
if(edad>=18){
    console.log('puedes entrar, eres mayor de edad ')
}
else{
    console.log('no puedes entrar a la disco, tienes: ', edad)
};

/*EJEMPLO CON USO DE LAS 3
IF, ELSE IF Y ELSE
Se necesita evaluar las notas del estudiante
y en base a su calificacion dar un mensaje
donde se indique si el estudiante aprobo o reprobo
   calificacion:
                100= superior
                80-90= calificacion alta
                70-80= calificacion alta 
                60-70= basico
                <60= reprobado 
 */

let nota =100;

if (nota === 100) {
    console.log('Su nota es superior');
} else if (nota >= 80) {
    console.log('su nota es alta');
} else if (nota >= 70) {
    console.log('su nota es alta');
} else if (nota >= 60) {
    console.log('su nota es basica');
} else {
    console.log('Reprobado');
};

/*SWITCH:
Sirve para evaluar un valor y ejecutar un bloque según el caso que coincida.
En esencia hace algo similiar al else if

switch (valor) {
  case opcion1:
    // código
    break;
  default:
    // código si no coincide
}
case = comparación
break = detiene el flujo
default = opción final

*/
//ejemplo con el problema anterior
// variables que son para una seccion de codigo o son locales 
// let y const 
let note=100;
switch (true){
    case (note===100):
        console.log('su nota es superior')
    break;
    case (note>=80):
        console.log('su nota es alta')
    break
    case (note>=70):
        console.log('su nota es alta')
    break
    case (note>=60):
        console.log('su nota es basica')
    break
    default:
        console.log('reprobado')


}

// ejemplo con varias comparaciones en el if 
if (weather === "sunny" && temperature > 20) {

    console.log("Go for a picnic");

} else if (weather === "rainy" || temperature < 10) {

    console.log("Stay indoors");

}

// ejercicio de condicionales 
/* Simula un cajero automático.

 Variables:
 - saldo: dinero disponible
 - retiro: dinero a retirar

Reglas:
 - Si retiro <= 0 → "Cantidad invalida"
 - Si retiro > saldo → "Fondos insuficientes"
 - Si retiro es múltiplo de 50 → "Retiro exitoso" y mostrar saldo restante
 - Si no → "Solo puedes retirar multiplos de 50" */

saldo = 1000;
retiro = 1000;


if(retiro<=0){
    console.log('cantidad invalida')
}
else if(retiro>saldo){
    console.log('Fondos insuficientes')
}
else if(retiro%50===0){
    console.log('Retiro exitoso')
    console.log('tu saldo ahora es de:', saldo-retiro)
}// multiplo de 50 funcion %=modulo o resto
else{
    console.log('solo puedes retirar multiplos de 50')
}
