const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let A = lines.shift();
let B = parseInt(lines.shift());
let cont = 0;

for (let i = (B + 1); i < A; i++) {
	if (i % 2 != 0) cont += i;
}
console.log(cont);