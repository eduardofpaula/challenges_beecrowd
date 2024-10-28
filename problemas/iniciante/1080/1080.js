const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let b = 0;
let posicao = 0;
for (let i = 0; i <= 99; i++) {
  const a = parseInt(lines.shift())
  if(a > b){
    b = a
    posicao = i
  }
} 
console.log(b)
console.log(posicao)