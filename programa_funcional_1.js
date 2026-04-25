// Tarea 1: Construir una función generadora de mensajes en consola
function mensaje_con_estilo(color, background, fontSize, txt) {
    // Declarar una variable para el mensaje

    var mensaje = "%c" + txt;
    
    // Declarar una variable para el estilo

    var estilos = `color: ${color};`;
    
    // Agregar el estilo de fondo a la variable estilo

    estilos += `background: ${background};`;
    
    // Agregar el tamaño de fuente a la variable estilo

    estilos += `font-size: ${fontSize};`;
    
    // Mostrar el mensaje con el estilo aplicado

    console.log(mensaje, estilos);
}

// Tarea 2: Construir otro generador de mensajes en consola

function celebrateStyler(razon) {
    // Declarar una variable fontStyle con estilos por defecto
    
    var fontstyle = "color: tomato; font-size: 50px";
    
    // Verificar si la razón es "birthday"

    if (razon === 'cumpleaños') {
        console.log('%cFeliz cumpleaños', fontstyle);
    }
    
    // Si la razón es "champions", mostrar un mensaje de felicitación

    else if(razon === 'campeones') {
        console.log('%cFelicidades por el titulooo!',fontstyle);
    }
    
    // Para cualquier otra razón, mostrar un mensaje por defecto
 
    else {
        var message = 'Celebración especial!';
        console.log('%c' + message, fontstyle);
    }
}

// Tarea 3: Ejecutar ambas funciones
// Llamar a la función consoleStyler con argumentos adecuados

mensaje_con_estilo('#1d5c63', '#ede6db', '40px', 'felicidades!');

// Llamar a la función celebrateStyler con un argumento adecuado
// ESCRIBE TU CÓDIGO AQUÍ

celebrateStyler('cumpleaños');
celebrateStyler('campeones');
celebrateStyler('aniversario');

// Tarea 4: Insertar un mensaje personalizado y de felicitación
function estilo_y_Celebrar(color, background, fontSize, txt, razon) {
    // Llamar a consoleStyler con los primeros cuatro argumentos
    // ESCRIBE TU CÓDIGO AQUÍ

    mensaje_con_estilo(color, background, fontSize, txt);
    
    // Llamar a celebrateStyler con el último argumento
    // ESCRIBE TU CÓDIGO AQUÍ

    celebrateStyler(razon);
}

estilo_y_Celebrar('#ef7c8e', '#fae8e0', '30px', 'You made it!', 'campeones');



    var globalVar = 77;

    function scopeTest() {
        var localVar = 88;
    }

    console.log(localVar);
    
    function meal(animal) {
        animal.food = animal.food + 10;
    }

    var dog = {
        food: 10
    };
    meal(dog);
    meal(dog);

    console.log(dog.food);
    
    function two() {
        return 2;
    }

    function one() {
        return 1;
    }

    function calculate(initialValue, incrementValue) {
        return initialValue() + incrementValue() + incrementValue();
    }

    console.log(calculate(two, one));