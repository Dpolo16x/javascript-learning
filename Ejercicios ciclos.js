// Crea un programa que:
// 1. Recorra los números del 1 al 50.
// 2. Muestre solo los números que sean múltiplos de 3 o de 5.
// 3. Si el número es múltiplo de ambos (3 y 5), debe mostrar: "FizzBuzz".
// 4. Si es solo múltiplo de 3, mostrar: "Fizz".
// 5. Si es solo múltiplo de 5, mostrar: "Buzz".
// 6. Al final, mostrar cuántos números fueron múltiplos de 3, de 5 y de ambos.


for(var i=1; i<=50; i++){
    if(i%3==0 && i%5==0){
        console.log(i+': FizzBuzz')}
    else if(i%3==0){
        console.log(i + ': Fizz');

    }
    else if(i%5==0){
        console.log(i +': Buzz');
    }
    else{
        console.log(i + ': no es múltiplo de 3 ni de 5');
    }
}

/*
Crea un programa que:

1. Recorra los números del 1 al 100 con un ciclo for.
2. Sume todos los números pares.
3. Sume todos los números impares.
4. Al final, muestre:
   - La suma de los pares
   - La suma de los impares
   - Cuál suma es mayor (pares o impares)
*/
var sumaimpares=0;
var sumapares=0;
for(var i=1; i<=100; i++ ){
   /*si el resto es 0 es par
   y la variable sumara cada par que coincida en la iteracion
   */
    if(i%2==0){
     sumapares+=i
    }
    /* si no es par: suma a la variable cada impar en la iteracion */
    else{
        sumaimpares=sumaimpares+i
    
    }
}
// impresion de las varaibles luego del ciclo ya sumadas
console.log('la suma de los pares es:', sumapares)
console.log('la suma de los impares es:', sumaimpares)

// condicional para mostrar cual de las sumas es mayor par o impar
if (sumapares>sumaimpares){
    console.log('la suma de los numeros pares es mayor que la suma de los numeros impares')
}
//compara si sumapares es igual a suma impares 
else if(sumapares===sumaimpares){
    console.log('la suma de pares e impares son iguales')
}
else{
    console.log('la suma de los impares es mayor que la suma de pares')
};


// ciclos anidados ejemplo para mostrar el año y meses de verano 
for(var año=2023; año<2026; año++){
    console.log(año)
    for(var mes=6; mes<9; mes++){
        console.log('--------', mes)
    }
};

// pares de 1 a 20 sumados
var counter=1
var pares=0
while(counter<=20){
    if(counter%2==0){
        pares+=counter
    }
    counter++
}
console.log("la suma de los pares es:", pares)
