const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let tempo = parseInt(lines.shift());
let velMedia = parseInt(lines.shift());

let litros = (tempo*velMedia)/12;

console.log(`${litros.toFixed(3)}`);