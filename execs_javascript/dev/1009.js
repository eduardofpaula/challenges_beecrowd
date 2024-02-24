const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let nome = String(lines.shift());
let salariofixo = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());

let salario = vendas - (0.85 * vendas);
let final = salariofixo + salario
console.log(`TOTAL = R$ ${final.toFixed(2)}`)