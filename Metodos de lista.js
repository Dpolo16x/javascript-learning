/*
las listas/matrices son en esencia un diccionario:
    ¿porque?:
    un diccionario: guarda los datos en: clave y valor
    una lista: guarda el valor 
- fisicamente: la clave de una lista es su indice:
    let lista=['ps1','ps2','ps3','ps4'] // los valores 
    la "clave" esta de fondo como indice: 
    0='ps1'
    1='ps2'
    2='ps3'
    3='ps4'
  lo que en diccionario seria asi: 
    let play={
        // clave: valor
        0:'ps1' 
        1: 'ps2'
        2: 'ps3'
        3:  'ps4'
        } 

   */ 
// Ejemplo:
    let frutas = ["manzana", "banana", "uva"];
    console.log(frutas[1]);     // se puede acceder por indice
    console.log(frutas["1"]);  // se puede acceder a ella por su clave como un diccionario 
    


//Metodos para manipulacion de listas

/*  METODOS PARA AÑADIR:

    Metodo Push: Este metodo agregar un valor a final de los valores de esa lista
    
    sintaxis: 
            nombrelista.push(valor_a_agregar)
*/ 
let arr=[];// lista vacia 
arr.push(1,2,3)
console.log(arr)


/*
Metodo unshift: Agrega un valor al inicio de la lista
        sintaxis: 
                nombrelistta.unshift(valor_a_agregar)

    ejemplo:
 */
let decimos=[1001,1002,1003];
console.log(decimos);//lista antes del metodo
decimos.unshift(1000);
console.log('ahora: ',decimos);// lista despues del metodo


/*
    METODOS DE ELIMINACION:

    -Metodo POP: elimina el ultimo elemento de la lista

    sintaxis: nombrelista.pop();
    
    -metodo SHIFT: Elimina el primer elemento de la lista 

    sintaxis: nombrelista.shift();

    -ejemplo:

*/

let animes=['Your life in april',' A silent voice','Naruto'];
console.log
animes.pop();// elimina el ultimo: "Naruto"
animes.shift();
console.log('ahora:', animes)


// ejemplo en una funcion 

// funcion que recibe parametros y crea una lista 

function crear_lista(c1,c2,c3){
        let listona=[];
        listona.push(c1)
        listona.push(c2)
        listona.push(c3)
        return listona
};
/*
La funcion no retorna la lista, sino su valor 
y ese valor se asigna fuera del ciclo a una variable que sera global
*/
lista_nueva=crear_lista('hola','mundo,','¿como andan?');
console.log(lista_nueva);



/*  map()
    -Crea un NUEVO array transformando cada elemento.
    -NO modifica el original.
    
*/
let arr5 = [1, 2, 3];
/* en palabras cortas es transfomar esa lista otra lista
    en el ejemplo:
    (x=>x*2)
    sintaxis:   (listaoriginal => en que quiero transformar esa lista)
*/
let nuevo5 = arr5.map(x => x * 2);
console.log(nuevo5); // [2, 4, 6]
console.log(arr5);   // [1, 2, 3]


//  filter()
// Crea un NUEVO array con los elementos que cumplen una condición.
// NO modifica el original.
let arr6 = [1, 2, 3, 4];
let pares6 = arr6.filter(x => x % 2 === 0);
console.log(pares6); // [2, 4]
console.log(arr6);   // [1, 2, 3, 4]


// find()
// Devuelve el PRIMER elemento que cumple una condición.
// NO modifica el array.
let arr7 = [1, 2, 3, 4];
let encontrado7 = arr7.find(x => x > 2);
console.log(encontrado7); // 3


//  forEach()
// Recorre el array ejecutando una función por cada elemento.
// NO devuelve nada.
let arr8 = [1, 2, 3];
arr8.forEach(x => console.log(x));


//  includes()
// Verifica si un valor EXISTE en el array.
// Devuelve true o false.
let arr9 = [1, 2, 3];
console.log(arr9.includes(2)); // true


//  indexOf()
// Devuelve la POSICIÓN de un valor dentro del array.
let arr10 = [1, 2, 3];
console.log(arr10.indexOf(2)); // 1


//  splice()
// Elimina o reemplaza elementos por posición.
// SÍ modifica el array original.
let arr11 = [1, 2, 3, 4];
arr11.splice(1, 1);
console.log(arr11); // [1, 3, 4]


//  slice()
// Copia una parte del array.
// NO modifica el original.
let arr12 = [1, 2, 3, 4];
let copia12 = arr12.slice(1, 3);
console.log(copia12); // [2, 3]
console.log(arr12);   // [1, 2, 3, 4]


//  reduce()
// Reduce el array a un solo valor (ej: suma total).
// NO modifica el original.
let arr13 = [1, 2, 3];
let suma13 = arr13.reduce((acc, x) => acc + x, 0);
console.log(suma13); // 6


// some()
// Devuelve true si AL MENOS un elemento cumple la condición.
let arr14 = [1, 2, 3];
console.log(arr14.some(x => x > 2)); // true


//  every()
// Devuelve true si TODOS los elementos cumplen la condición.
let arr15 = [1, 2, 3];
console.log(arr15.every(x => x > 0)); // true


//  sort()
// Ordena los elementos del array.
// Modifica el array original.
let arr16 = [3, 1, 2];
arr16.sort((a, b) => a - b);
console.log(arr16); // [1, 2, 3]


//  reverse()
// Invierte el orden del array.
// Modifica el array original.
let arr17 = [1, 2, 3];
arr17.reverse();
console.log(arr17); // [3, 2, 1]


//  length
// Indica cuántos elementos tiene el array.
let arr18 = [1, 2, 3];
console.log(arr18.length); // 3