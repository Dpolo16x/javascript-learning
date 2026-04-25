// como definir una clase, sus atributos y como hacer una instancia de esa clase

/*
Como se compone: clase 


sintaxis:
    class nombre_de_la_clase{
            constructor(atributos de la clase){
            //el this hace referencia a las futuras instancias/obejtos de la clase
            this.atributo=atributo;
            }
            metodos_de_la_clase(){
                //serie de acciones
                console.log(`hola los atributos son: ${atributos_de_la_clase}`);
            }
    }
    //instancia de la clase
    const instancia1= new nombre de la instancia(parametros a enviar a la clase);
    // llamada de un metodo de la clase 
    instancia1.metodo_de_la_clase();   

 */
class persona{
    //constructor con los atributos de la clase
        constructor(id,nombre, edad, altura){
        this.id=id; // atributo publico
        this.nombre=nombre;
        this.edad=edad;
        this.altura=altura;
    }
    //metodo de la clase que saluda y da info de la instancia 
    saludar(){
        console.log(`hola soy ${this.nombre}, tengo la edad de ${this.edad}, mi altura es ${this.altura}`);
    }
    despedirse(){
        console.log(`hasta luego su amigo ${this.nombre}, les dice adios :P`)
    }
}
// instancia de la clase persona 
const persona1= new persona(1123, 'Diego Polo', 25, 170);
//llamada de la instacia con su metodo de saludar 
persona1.saludar();
persona1.despedirse();


// pueden existir clases en los que sus atributos se definan desde el constructor y no en las intancias
/*
- las clases con atributos por defecto son utiles para cuando:
                -se instancia una clase sin enviar los atributos de un objeto
*/
// ejemplo
class parametros_defecto{
    // predefine que valor tendran los atributos
    constructor(n1=1, n2=2, n3= 3, string1="salida:P:", bool1=true
     ){
        this.n1=n1
        this.n2=n2
        this.n3=n3
        this.string1=string1
        this.bool1=bool1
    }
    calculate(){
        if(this.bool1==true){
            console.log(this.string1, this.n1+this.n2+this.n3)
            return;
        }        
        else{
            return "el valor del bool es falso (incorrect)"
        }
    }
}
const trry= new parametros_defecto(10,12,4,"entrada",true)
trry.calculate();