const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let [x1, y1] = lines.shift().split(" ").map((x) => parseFloat(x));
let [x2, y2] = lines.shift().split(" ").map((x) => parseFloat(x));

let distancia = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));

console.log(distancia.toFixed(4));