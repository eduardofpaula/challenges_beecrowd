const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

n = 3.14159
R = Number(lines[0])
A = n * (R*R) 

console.log(`A=${A.toFixed(4)}`)