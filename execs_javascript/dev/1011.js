const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let number1 = parseFloat(lines.shift());

let pi = 3.14159;
let volume = (4/3) * pi * (number1 ** 3)

console.log(`VOLUME = ${volume.toFixed(3)}`);