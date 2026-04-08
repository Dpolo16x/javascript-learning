/*CICLO FOR: Se usa cuando sabes cuántas veces repetir

sintaxis:
for (var variable = valor_inicial; condicion; incremento) {
     acciones a repetir
}

*/

// ejemplos:

// FOR de incremento con ++
for( var i=0; i<=10;i++){
    console.log(i)
}
console.log('contaste hasta 10')

//For de decremento con -- 
for(let o=10; o>0; o--){
    console.log(o)
}
console.log('Feliz año')


//ejemplo:itera 4 veces dado que el contador inicializa en 0 hasta llegar a 3: 0,1,2,3
for (var i = 0; i <= 3; i++) {
    console.log("Esta es la linea: ", i)
}

/*
CICLO WHILE:

Repite un bloque de código mientras una condición sea verdadera.

Estructura:
let variable = valor_inicial;

while (condicion) {
    // acciones
    incremento; // evita ciclo infinito
}

Funcionamiento:
- Primero evalúa la condición
- Si es true → ejecuta el bloque
- Si es false → termina

Uso:
Se utiliza cuando no sabes cuántas veces repetir,
solo depende de una condición.

Clave:
Siempre actualizar la variable dentro del ciclo
para que en algún momento la condición sea falsa.

*/

let contador=1;

while(contador<4){
    console.log('el contador esta en:',contador)
    contador++
}
console.log('fuera')

/*
CICLOS ANIDADOS:

Son ciclos dentro de otros ciclos.

Estructura:
for (let i = inicio1; condicion1; incremento1) {
    for (let j = inicio2; condicion2; incremento2) {
        // acciones
    }
}

Funcionamiento:
- Por cada vuelta del ciclo externo, el interno se ejecuta completo.
- Es decir, el ciclo interno se repite varias veces por cada iteración del externo.

Uso:
Se utilizan para trabajar con tablas, matrices o patrones.

Ejemplo mental:
Si el externo se repite 3 veces y el interno 3 veces,
se ejecutan 9 veces en total (3 x 3).

Clave:
El ciclo interno depende del externo y se reinicia en cada vuelta.
*/

//EJEMPLO: mostrar una tabla 3x3 con números


for (let i = 1; i <= 3; i++) {          // ciclo externo (filas)
    for (let j = 1; j <= 3; j++) {      // ciclo interno (columnas)
        console.log("Fila:", i, "Columna:", j);
    }
}