const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

var x = parseInt(lines.shift());
for (let i = 1; i <= x; i++) {
    if (i % 2 != 0) console.log(i);
}