// FUNCIONES

// Son bloques de código que dependen de parámetros de entrada y producen una salida

// Se usan para abstraer tareas y funcionalidades.

// SINTAXIS: function <nombre>(<param1>, <param2>, ..., <paramN>) { ...(bloque) }

function suma(a, b) {
    return a + b;
}

console.log( "1 + 5 =", suma(1, 5) )

function sumaArreglo(arreglo) {
    let s = 0;

    // in - index
    // of - value
    for (let x of arreglo) {
        s += x; // s = s + x
    }

    return s;
}

console.log( "[1, 14, 6] = ", sumaArreglo([1, 14, 6]) )

function sumaEdadesPersonas(personas) {
    let s = 0

    for (let persona of personas) {
        // persona = { nombre, edad }
        // persona.edad | persona["edad"]
        s += persona.edad // s = s + persona["edad"]
    }

    return s
}

const personas = [
    {
        nombre: "Ana",
        edad: 18
    },
    {
        nombre: "Pepe",
        edad: 23
    },
    {
        nombre: "Paco",
        edad: 35
    }
];

console.log( "Edades de las personas =", sumaEdadesPersonas(personas) )

// MAPEOS

const productos = [
    {
        name: "Coca Cola",
        price: 10.5
    },
    {
        name: "Galletas Marías",
        price: 18.5
    },
    {
        name: "Leche Alpura",
        price: 23
    }
]

// function (a, b) { return a + b }
// (a, b) => { return a + b } // Lambda de bloque
// (a, b) => a + b // Lambda de línea

const prices = productos.map(producto => producto.price)
// [10.5, 18.5, 23]

console.log( "prices", prices, sumaArreglo(prices) )

// FILTER

const users = [
    {
        name: "ana98",
        active: true
    },
    {
        name: "pepe77",
        active: false
    },
    {
        name: "paco53",
        active: true
    },
    {
        name: "coco12",
        active: false
    }
]

// Si users.active es true entonces filtralo (regresalo)
const activeUsers = users.filter(user => user.active)
// [{ name: "ana98", active: true }, { name: "paco53", active: true }]

// Si no (users.active es true) entonces filtralo (regresalo)
const inactiveUsers = users.filter(user => !user.active)
// [{ name: "pepe77", active: false }, { name: "coco12", active: false }]

console.log({ activeUsers, inactiveUsers })

// REDUCE

const pesos = [98, 45, 67, 49, 23]

// reduce <reductor> <initial>
// <reductor> (accum, next) => accum + next
// (total, peso) => total + peso // total = total + peso
const totalPesos = pesos.reduce((total, peso) => total + peso, 0)

console.log( "Pesos:", pesos, "Total", totalPesos )