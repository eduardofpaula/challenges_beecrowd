const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let [A, B] = lines.shift().split(' ').map((x) => parseInt(x));

if(A < B)   [A, B] = [B, A];

console.log((A % B === 0) ? "Sao Multiplos" : "Nao sao Multiplos");