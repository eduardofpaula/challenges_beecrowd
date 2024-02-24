const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let media = (2 * A + 3 * B + 5 * C) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);