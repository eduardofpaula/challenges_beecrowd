const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let number = lines.shift();
let cont = 0;
let i = 0;
while (i < 5) {
	if (number % 2 === 0) cont++;
	i++
	number = lines.shift();
}
console.log(`${cont} valores pares`);