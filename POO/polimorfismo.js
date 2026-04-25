/*
que es el polimorfismo:- es usar metodos de una clase y usarlos de manera diferente

un ejemplo puede ser: 
             // clase padre: animal 
                        metodo: hacer sonido{
                                return('sonido generico')
                        }   
            // clase perro: hereda de animal sus metodos y atributos 
                    metodo hacer sonido de la clase animal:
                        hacer_sonido{
                            return('guau guau')
                        }

    -cuando se instancias se pude ver que cada uno se comporta diferente manera
    -devolviendo tambien diferentes valores 

*/

// clase animal
class animal{
        constructor(id_carnet ,nombre, raza , edad){
            this.id_carnet=id_carnet
            this.nombre=nombre
            this.raza=raza
            this.edad=edad 
        }
        sonido(){
            console.log('sonido generico')
        }

}
class perro extends animal{
    sonido(){
        console.log('guau guau')
    }
}
// instancias de las clases
const animal1= new animal();
const perro1= new perro();

//llamada a la funcion desde cada instancia
animal1.sonido();
perro1.sonido();



// ejemplo 2 de polimorfismo
// claculadora


//clase super
const a= 10 
const b= 4

class operacion{
    calcular(a,b){
    return 0};
};

class suma extends operacion{
    calcular(a,b){
        return a+b;
    };

};

class resta extends operacion{
    calcular(a,b){
        return a-b
    };    
};

class multiplicacion extends operacion{
    calcular(a,b){
        return a*b
    };    
    
};

class division extends operacion{
    calcular(a,b){
        return a/b
    };    
    
};

// instancias
const suma1=new suma();
const resta1=new resta();
const multi1=new multiplicacion();
const divi1= new division();

// lista con las instancias
ope=[
    suma1,
    resta1,
    multi1,
    divi1

];

// recorre la lista de instancias y por cada uno llama al metodo calcular
ope.forEach(ope=>{
    console.log(ope.calcular(a,b))
})







