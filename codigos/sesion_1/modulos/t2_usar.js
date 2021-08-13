// USAR MÓDULOS

// Podemos importar o requerir lo que otros archivos hayan exportado

// Para dividir la funcionalidad dentro de archivos

// Importamos lo que exportó en el archivo t1_crear.js
const saludar = require("./t1_crear")
// saludar = function() { console.log("Hola", new Date()) }

saludar();

for (let i = 0; i < 1000; i++) {
    saludar();
}

saludar();