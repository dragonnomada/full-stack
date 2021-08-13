// MÓDULOS

// Archivos de JS que funcionan como librerías

// Cualquier archivo es un módulo

// Usamos `module.export` para exponer lo que será el módulo

// module.exports = 123;

// module.exports = function (a, b) { return a + b }

// module.exports = ["manza", "pera", "piña"]

module.exports = function () {
    console.log("Hola", new Date())
}