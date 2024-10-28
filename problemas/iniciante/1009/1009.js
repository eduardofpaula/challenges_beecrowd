const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');

// Constrói o caminho completo do arquivo 'stdin' no diretório pai
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');

// Lê o conteúdo do arquivo stdin
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let nome = String(lines.shift());
let salariofixo = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());

let salario = vendas - (0.85 * vendas);
let final = salariofixo + salario
console.log(`TOTAL = R$ ${final.toFixed(2)}`)