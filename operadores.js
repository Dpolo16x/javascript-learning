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