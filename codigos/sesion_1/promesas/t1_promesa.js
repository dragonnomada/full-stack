// PROMESAS

// resolve - función que resuelva la promesa con una salida (ok)
// reject - función que rechaze la promesa con un error (error)

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Se llama transcurridos los 5000ms (5s)
        resolve("Ya pasaron 5 segundo");
    }, 5000); // Cuándo se ejecuta nuestra función
})

console.log(new Date());

promise.then(result => {
    console.log({ result });
    console.log(new Date());
});