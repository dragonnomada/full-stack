const fs = require("fs");

const content = fs.readFileSync(__dirname + "/" + "datos.csv", "utf-8");

console.log( content );

const lines = content.split("\r\n");

const header = lines[0];

// [1, 2, 3].slice(1) [2, 3]
// [1, 2, 3, 4, 5].slice(1, 4) [2, 3, 4]
const restLines = lines.slice(1);

const labels = header.split(",");

const rows = restLines.map(line => line.split(","))

console.log({ labels, rows })