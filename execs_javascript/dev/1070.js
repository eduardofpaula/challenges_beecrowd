const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

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