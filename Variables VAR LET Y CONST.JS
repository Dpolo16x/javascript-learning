// DEFINICION DE VARIABLES
// uso de la funcion var 
var saludo='Hola'
var persona='Diego'
//tambien puedo cambiar el valor de la variable 
persona='Alejandro'
// impresion de las variables 
console.log(saludo,persona)

// Funcion let: Para variables que su valor puede cambiar (mutable)
let apodo='Polito'
console.log('mi anterior apodo es:',apodo)// aqui imprime el 1er valor asignado
apodo='pollo'//cambia el valor
console.log('el apodo ahora es:', apodo); //imprime el ultimo valor de la variable 

// Funcion Const: Para variables que no van a cambiar su valor(no es mutable)
const ID_Tienda=123
console.log('el id de la tienda de mosquera es: ',ID_Tienda)
