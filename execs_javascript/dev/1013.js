const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

const maior = (a, b) => (a + b + Math.abs(a - b)) / 2;

let [a, b, c] = lines.shift().split(" ").map((x) => parseInt(x));

let resposta = maior(a, maior(b, c));

console.log(`${resposta} eh o maior`);