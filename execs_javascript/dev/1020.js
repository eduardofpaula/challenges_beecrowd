const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let dias = parseInt(lines.shift());

let anos = Math.floor(dias / 365);
dias %= 365;
let meses = Math.floor(dias / 30);
dias %= 30;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);