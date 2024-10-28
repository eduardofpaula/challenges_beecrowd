const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

var x = parseInt(lines.shift());
var cont = 0;

while (cont < 6) {
	if (x % 2 == 1) {
		console.log(x);
		cont++;
	}
	x++;
}