const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');

// Constrói o caminho completo do arquivo 'stdin' no diretório pai
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');

// Lê o conteúdo do arquivo stdin
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

const maior = (a, b) => (a + b + Math.abs(a - b)) / 2;

let [a, b, c] = lines.shift().split(" ").map((x) => parseInt(x));

let resposta = maior(a, maior(b, c));

console.log(`${resposta} eh o maior`);