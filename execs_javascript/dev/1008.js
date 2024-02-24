const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let number1 = parseInt(lines.shift());
let number2 = parseInt(lines.shift());
let hour = parseFloat(lines.shift());

let salary = (number2 * hour);

console.log(`NUMBER = ${number1}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);