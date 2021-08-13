// https://www.npmjs.com

// npm install csv-parse

const fs = require("fs");

const parse = require("csv-parse");

const csv = fs.readFileSync("datos.csv", "utf-8")

parse(csv, { columns: true }, (error, records) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(records);

    console.log( records.map(record => record.Nombre) )
    console.log( records.map(record => Number(record.Edad)) )
});