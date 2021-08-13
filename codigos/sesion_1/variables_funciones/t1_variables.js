// VARIABLES

// > Existen dos tipos de variables ( const / let )

// Variable inmutable/constante
// * No se puede reasignar

const a = 123;

// a = 456; // ERROR: No se puede reasignar

// Variable mutable/normal
// * Si se puede reasignar

let b = 123;

b = 456; // Se reasigna el valor a 456

b = "Hola mundo"; // Se reasigna el valor a "Hola mundo"

// TIPOS DE DATOS

// string - Texto que puede contener máximo lo que mida la memoria RAM
// number - Número que puede o no tener decimales
// boolean - Es un valor lógico positivo o negativo ( true / false )
// null - Es un tipo nulo usado para iniciar las variables en estado null
// undefined - Es un tipo de dato no definido y es usado cuándo no hay valor definido

let c; // c = undefined

// COLECCIONES

// Array - Es un arreglo de valores [ <valor1>, <valor2>, ..., <valorN> ]
// Object - Es un diccionario de claves y valores { <clave1>: <valor1>, <clave2>: <valor2>, ..., <claveN>: <valorN> }

const nombre1 = "Ana Ming";
const nombre2 = 'Ana Ming';
const nombre3 = `Ana Ming`;

const edad = 24;
const peso = 72.5;
const estatura = Number("123.456"); // 123.456

let isVisible = false;
// ...
isVisible = true;

let persona = null;
// ...
persona = {
    nombre: "Ana Ming",
    edad: 24,
    direccion: {
        calle: "Av. Siempre Viva",
        num_ext: 123
    }
}

const frutas = ["manzana", "pera", "guayaba"];

const personas = [
    {
        nombre: "Susana",
        edad: 21
    },
    {
        nombre: "Paco",
        edad: 34
    },
    // ...
    {
        nombre: "Pepe",
        edad: 45
    }
]

// ESTRUCTURAS DE CONTROL

// IF

let x = 5;

if (x > 10) {
    console.log("x > 10")
} else if (x > 0) {
    console.log("0 < x <= 10")
} else {
    console.log("x <= 0");
}

// FOR TRADICIONAL

for (let i = 0; i < 100; i++) {
    console.log(`i + 1 = ${i + 1}`); // String Templates `TEXTO ${<expr>} ... ${<expr>}`
}

// FOR OF (FOREACH)

const edades = [23, 45, 17, 19, 25, 27, 35, 33];

for (let edad of edades) {
    console.log(`Edad: ${edad}`)
    // Edad: 23
    // Edad: 45
    // Edad: 17
    // ...
    // Edad: 33
}

// FOR IN

const obj = { x: 123, y: 456, z: 987 };

for (let key in obj) {
    const value = obj[key];
    console.log(`${key} tiene ${value}`)
    // x tiene 123
    // y tiene 456
    // z tiene 987
}

// AVANZADO

// Object.entries(obj) -> [ ["x", 123], ["y", 456], ["z", 987] ]

// const ubicacion = [-98, 113]
// const [x, y] = ubicacion
// const [x, y] = [-98, 113] // x = -98; y = 113

for (let [key, value] of Object.entries(obj)) {
    console(key, value);
    // x 123
    // y 456
    // z 987
}