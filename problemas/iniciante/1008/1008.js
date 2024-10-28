const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');

// Constrói o caminho completo do arquivo 'stdin' no diretório pai
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');

// Lê o conteúdo do arquivo stdin
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let number1 = parseInt(lines.shift());
let number2 = parseInt(lines.shift());
let hour = parseFloat(lines.shift());

let salary = (number2 * hour);

console.log(`NUMBER = ${number1}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);