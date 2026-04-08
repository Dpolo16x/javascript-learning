/*
Funciones: 
se usan para ejecutar una serie de codigo y para reutilizar dicha serie de codigo en diferentes secciones del mismo 

ESTRUCTURA:
function nombreFuncion(parametros) {
    // 1. lógica / acciones
    return resultado; // opcional (si necesitas devolver algo)
}

CLAVES:
- nombreFuncion → describe lo que hace (ej: sumar, calcularTotal)
- parámetros → datos de entrada (opcionales)
- return → devuelve un valor (si no hay return → no devuelve nada)
- se ejecuta cuando la llamas: nombreFuncion()

CUÁNDO USAR PARÁMETROS:
- cuando necesitas datos externos
- cuando quieres reutilizar la función con distintos valores

CUÁNDO NO USAR PARÁMETROS:
- cuando la función siempre hace lo mismo

EJEMPLO BASE:
function ejemplo(a, b) {
    let resultado = a + b; // proceso
    return resultado;
}

let r = ejemplo(2, 3);
*/

// EJEMPLO con parametros
function sumar_numeros(n1,n2){
    resultado=n1+n2
    return resultado

}
sumar_numeros(14,12)//Se llama a la funcion y se envian parametros(14,12)
console.log(resultado)// invoco o llamo a la funcion 

//EJEMPLO SIN PARAMETROS
function decir_hola(){
    console.log('holaaaaaa, ¿como estan?')
}
decir_hola()// se invoca igualmente sin parametros

