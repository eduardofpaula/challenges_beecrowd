const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');

// Constrói o caminho completo do arquivo 'stdin' no diretório pai
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');

// Lê o conteúdo do arquivo stdin
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let number1 = parseFloat(lines.shift());

let pi = 3.14159;
let volume = (4/3) * pi * (number1 ** 3)

console.log(`VOLUME = ${volume.toFixed(3)}`);