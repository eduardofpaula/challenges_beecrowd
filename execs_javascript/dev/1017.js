const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let tempo = parseInt(lines.shift());
let velMedia = parseInt(lines.shift());

let litros = (tempo*velMedia)/12;

console.log(`${litros.toFixed(3)}`);