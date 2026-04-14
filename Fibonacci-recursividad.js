//funciones a profundidad y recursividad
/*
En este ejemplo la funcion inicia un contador en 3 
imprime primero a contador y le resta 1 a esa variable 
cuando contador sea igual a 0 la funcion para 
y esta funcion se llama a si misma, genera algo similar a un bucle 

*/
//Un afuncion que se llama a si misma esta haciendo recursividad y un bucle 
let counter=3
function ejemplo(){
    console.log(counter);
    counter=counter-1;
    if(counter===0) return;
   ejemplo()
}
ejemplo()


/*
Fibonacci es una secuencia donde cada número es la suma de los dos anteriores.

- Comienza con 0 y 1.
- Estos son los casos base porque no dependen de ningún cálculo previo.

F(0) = 0
F(1) = 1

La función usa recursividad:
Fibonacci(numero) = Fibonacci(numero - 1) + Fibonacci(numero - 2)

Esto significa que el problema se divide en dos partes más pequeñas
hasta llegar a los casos base, donde la función deja de llamarse a sí misma.
*/

function Fibonacci(numero) {

    if (numero === 0) {
        return 0;
    } 
    if (numero === 1) {
        return 1;
    } 
    //llama a la funcion para hacer ambos
    //
    return Fibonacci(numero - 1) + Fibonacci(numero - 2); 
}
console.log(Fibonacci(4)); //
console.log(Fibonacci(10));