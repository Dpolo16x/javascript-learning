/*
MATRICES (ARRAYS) EN JAVASCRIPT

Una matriz es una estructura que almacena varios valores en una sola variable.

NOMBRES QUE RECIBEN:
    -Arreglo (traducción al español)
    -Lista (forma general de llamarlo)
    -Matriz (cuando es de varias dimensiones, como filas y columnas)

EJEMPLO:
let numeros = [1, 2, 3, 4, 5];

CARACTERÍSTICAS:
- Guarda múltiples datos
- Se accede por posiciones (índices)
- Empieza desde índice 0

IMPORTANTE:
- Array 1D → [1,2,3] (una sola fila)
- Array 2D → [[1,2],[3,4]] (filas y columnas)

Array = estructura para guardar varios datos en una variable

*/
//Ejemplo de una lista que almacena los dias de la semana
//Al recorrer se inicia desde el indice 0 que seria lunes
/*
INDICES: posicion de un valor en la lista
0=lunes
1=Martes
2=Miercoles
3=Jueves
4=Viernes
5=Sabado
6=Domingo

*/
var dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
console.log(dias[6])// imprimira domingo porque es el indice 6

/*
Ejemplo: un tren que en cada vagon almacena cargas */
var Tren1=['Papas','Maiz','Arroz','Frijoles','Azucar']
//para imprimir una posicion en especifico: nombre_lista[posicion a imprimir]
console.log(Tren1[2])//imprimira a Arroz

//Ejemplo: 
// una funcion que recorre listas y las imprime

function items_lista(lista){
    //este bucle se ejecuta hasta que i sea menor que la longitud de la lista
    for(i=0;i<lista.length;i++){
    /*
    se imprime el indice del elemento de la lista del valor actual de i:iterador que aumenta
    se puede imprimir el elemento de la lista y su posicion, imprimiendo a i tambien.
    si se quiere que i inicie en 0 se usa i+1 en el console.log
    */
        console.log(i,lista[i])
    }
}

//lista de colores
var colores = ['rojo', 'naranja', 'Amarillo', 'verde', 'Azul', 'Morado', 'Rosado'];

// invocacion de la funcion, enviando como parametro la lista colores 
items_lista(colores); 

// Ejemplo con condicionales:
function items_lista(lista){
    
    for(i=0;i<lista.length;i++){
            /* si en la iteracion el elemento de la lista es igual a 'rojo' multiplica por 100 el i
            if:
            indice rojo=0*100     
            else
            indice naranja=1*100:100   
            */
            if(lista[i]==='rojo'){
                console.log(i*100,'tomates!!')
            }
            else{
                console.log(i*100,lista[i])
            }
    }
}

//lista de colores
var colores = ['rojo', 'naranja', 'Amarillo', 'verde', 'Azul', 'Morado', 'Rosado'];

// invocacion de la funcion, enviando como parametro la lista colores 
items_lista(colores)
