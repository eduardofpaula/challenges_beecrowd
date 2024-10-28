const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');

// Constrói o caminho completo do arquivo 'stdin' no diretório pai
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');

// Lê o conteúdo do arquivo stdin
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// Colar no beecrowd o código abaixo
var A = Number(lines[0]);
var B = Number(lines[1]);

console.log(`X = ${A + B}`);
