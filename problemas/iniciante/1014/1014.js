const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');

// Constrói o caminho completo do arquivo 'stdin' no diretório pai
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');

// Lê o conteúdo do arquivo stdin
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');
// colar no beecrowd o codigo abaixo

let a = parseInt(lines.shift());
let b = parseFloat(lines.shift());

let kms = a / b;

console.log(`${kms.toFixed(3)} km/l` )