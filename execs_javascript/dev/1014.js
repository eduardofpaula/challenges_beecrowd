const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let a = parseInt(lines.shift());
let b = parseFloat(lines.shift());

let kms = a / b;

console.log(`${kms.toFixed(3)} km/l` )