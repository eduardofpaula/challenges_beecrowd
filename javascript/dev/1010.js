const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let valores = lines.shift().trim().split(" ");
let codigo1 = parseInt(valores.shift());
let quantidade1 = parseInt(valores.shift());
let valor1 = parseFloat(valores.shift());

let valores2 = lines.shift().trim().split(" ");
let codigo2 = parseInt(valores2.shift());
let quantidade2 = parseInt(valores2.shift());
let valor2 = parseFloat(valores2.shift());

let resultado = (quantidade1 * valor1) + (quantidade2 * valor2);

console.log(`VALOR A PAGAR: R$ ${resultado.toFixed(2)}`);