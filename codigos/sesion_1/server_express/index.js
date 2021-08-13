const http = require("http") // native de nodejs

const express = require("express");
const cors = require("cors");

const app = express()

app.use(cors())

app.get("/", (request, response) => {
    console.log(request.query);

    response.send("Bienvenido :D");
});

app.post("/api/usuarios", (request, response) => {
    // TODO: Obtener los usuarios de la base de datos
    const token = request.query.token;
    
    // TODO: Checar en bd si el token es válido
    if (token !== "ABC123") {
        response.status(401).send("No autorizado envía el token api/usuario?token=<TOKEN>");
        return;
    }

    response.send([
        {
            name: "Ana Ming",
            age: 24
        },
        {
            name: "Pepe Pecas",
            age: 35
        }
    ]);
});

const server = http.createServer(app);

server.listen(8080, () => {
    console.log("Servidor listo en el puerto 8080 (http://localhost:8080/)")
});