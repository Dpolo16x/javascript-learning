/* diccionarios: Sirven para almacenar los datos en clave valor
    ejemplo:
           let persona={
            rasgos
           }
            
se pueden crear y modifcar de diferentes maneras 
-la primera es con corchetes
-sintaxis:
nombre_diccionario={
    clave: valor
    rasgo_diccionario= valor_rasgo

}
*/
var persona={
    id:11201239182,
    nombre:'danna',
    edad: 19,
    altura:1.60
}
console.log(persona)
/* puedo imprimir algo especifico del diccionario
    sintaxis:
        nombre_diccionario.rasgo_diccionario*/
console.log(persona.nombre)

/*
la segunda forma para construir objetos/diccionarios, es con notacion de (.)
sintaxis:
    var animal={};// diccionario vacio 
    animal.tipo='felino'; //
    nombrediccionario.clave/rasgo=valor

*/
let animal={}
animal.tipo='felino';
animal.raza='persa';
animal.peso=23;
animal.edad=5;
console.log(animal)

/*
La tercera forma para construir un objeto o diccionario es con notacion de corchetes([])
    sintaxis:
    nombrediccionario={}; diccionario vacio 
    nombrediccionario["clave"]= 'valor'
    nombrediccionario.clave=nuevovalor; // se puede modificar el valor con la notacion de punto
    console.log(nombrediccionario)

*/
//ejemplo:
    
    let carro={};
    carro["color"]='azul';
    carro['modelo']=2023;
    carro["marca"]='Mazda';
    carro['velocidad_MAX']= 200;
    console.log(carro);
    carro.velocidad_MAX=160;
    console.log('la velocidad por leyes fue reducida a:',carro.velocidad_MAX)

// Ejemplo recorriendo lista y diccionario:

let datos_dron=['Velocidad','color ','latitud']
let dron={
    velocidad:120,
    color:"rojo",
    latitud: 160
};
for( var i=0; i<datos_dron.length;i++){
    console.log(dron[datos_dron[i]])

}