/*
Operadores aritmeticos:
+  =suma
-  =  resta
*  = multiplicación
/  =división
%  =módulo (residuo)
** = potencia
*/

// ejemplo con operadores aritmeticos
let año_nacimiento=Number(2005)
let año_actual=Number(2026)
console.log('Mi edad actual es: ',año_actual-año_nacimiento) //uso de operador

/*
Operadores de comparacion: para comparar datos
==   // igual (compara unicamente el valor)
===  // igual estricto (compara el valor y tipo)
!=   // diferente
!==  // diferente estricto(valor y tipo)
>    // mayor que
<    // menor que
>=   // mayor o igual
<=   // menor o igual


*/
//ejemplo con operadores de comparacion
console.log(año_actual>año_nacimiento)// compara y devuelve un valor TRUE o false 

/*
operadores logicos: sirve para combinar condiciones
&&  // AND (y) las dos condiciones deben cumplirse 
||  // OR (o) al menos una de las condiciones debe cumplirse 
!   // NOT (negación) 
*/
console.log(año_actual>año_nacimiento&&año_actual<2025)// 


// ejemplo con uso de operadores aritmeticos y operadores logicos: AND &&
// alejo quiere entrar a una disco donde le piden ser mayor y traer la cedula parea ingresar
let edad=18;
let Cedula=true;
console.log('¿Alejo trajo cedula y tiene 18 o mas años?: ',edad>=18 && Cedula==true);

/*ejemplo de OR
Necesita escribir un programa en JavaScript que devuelva true si el valor de la 
variable hora no está entre las 9 y 17 horas*/
var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);
