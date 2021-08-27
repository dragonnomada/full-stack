const http = require("http");

const mongodb = require("mongodb");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let db = null;

app.get("/api/products", async (request, response) => {
    const productsCollection = db.collection("products");

    const products = await productsCollection.find({}).toArray();

    response.send(products);
});

app.post("/api/products/inventory/add", async (request, response) => {
    const { sku, quantity } = request.body;

    if (!(/^\d{3,10}$/.test(sku))) {
        response.status(500).send("Invalid SKU");
        return
    }

    if (!(/^\d+$/.test(quantity))) {
        response.status(500).send("Invalid QUANTITY");
        return
    }

    const productsCollection = db.collection("products");

    const product = await productsCollection.findOne({ sku });

    if (!product) {
        response.status(500).send("Invalid PRODUCT");
        return
    }

    // BLOQUEA EL PRODUCTO
    await productsCollection.updateOne({
        sku
    }, {
        $set: {
            lock: true
        }
    });

    // COMPRUEBA EXISTENCIAS
    if (Number(quantity) > 100) {
        // DESBLOQUEA EL PRODUCTO
        await productsCollection.updateOne({
            sku
        }, {
            $set: {
                lock: false
            }
        });
        response.status(500).send(`No se permite agrar más de 100 unidades`);
        return
    }

    // ACTUALIZA EXISTENCIAS
    const result = await productsCollection.updateOne({
        sku
    }, {
        $set: {
            quantity: product.quantity + Number(quantity)
        }
    });

    // DESBLOQUEA EL PRODUCTO
    await productsCollection.updateOne({
        sku
    }, {
        $set: {
            lock: false
        }
    });

    console.log(result);

    response.send(result);
});

app.post("/api/products/inventory/remove", async (request, response) => {
    const { sku, quantity } = request.body;

    if (!(/^\d{3,10}$/.test(sku))) {
        response.status(500).send("Invalid SKU");
        return
    }

    if (!(/^\d+$/.test(quantity))) {
        response.status(500).send("Invalid QUANTITY");
        return
    }

    const productsCollection = db.collection("products");

    const product = await productsCollection.findOne({ sku });

    if (!product) {
        response.status(500).send("Invalid PRODUCT");
        return
    }

    if (product.lock) {
        response.status(401).send("PRODUCT IS LOCK");
        return
    }

    // BLOQUEA EL PRODUCTO
    await productsCollection.updateOne({
        sku
    }, {
        $set: {
            lock: true
        }
    });

    // COMPRUEBA EXISTENCIAS
    if (product.quantity - Number(quantity) < 0) {
        // DESBLOQUEA EL PRODUCTO
        await productsCollection.updateOne({
            sku
        }, {
            $set: {
                lock: false
            }
        });
        response.status(500).send(`No se puede quitar dicha cantidad (${product.quantity} / ${quantity})`);
        return
    }

    // ACTUALIZA EXISTENCIAS
    const result = await productsCollection.updateOne({
        sku
    }, {
        $set: {
            quantity: product.quantity - Number(quantity)
        }
    });

    // DESBLOQUEA EL PRODUCTO
    await productsCollection.updateOne({
        sku
    }, {
        $set: {
            lock: false
        }
    });

    console.log(result);

    response.send(result);
});

const server = http.createServer(app);

mongodb.MongoClient.connect("mongodb://localhost/inventario", (error, client) => {
    if (error) {
        console.log(error);
        return;
    }

    db = client.db();

    server.listen(5000, () => {
        console.log("Server started at http://localhost:5000")
    });
});