const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

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