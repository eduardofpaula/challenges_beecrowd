const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');

// Constrói o caminho completo do arquivo 'stdin' no diretório pai
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');

// Lê o conteúdo do arquivo stdin
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

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