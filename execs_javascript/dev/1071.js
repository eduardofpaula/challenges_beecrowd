const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let A = lines.shift();
let B = parseInt(lines.shift());
let cont = 0;

for (let i = (B + 1); i < A; i++) {
	if (i % 2 != 0) cont += i;
}
console.log(cont);