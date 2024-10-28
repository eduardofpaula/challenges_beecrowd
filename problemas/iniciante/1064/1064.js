const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let number = parseFloat(lines.shift());
let cont = 0;
let numbers = 0;
for(let i = 0; i < 6; i++){
  if(number > 0){
    cont++;
    numbers += number;
  }
  number = parseFloat(lines.shift());
}
const media = numbers / cont;

console.log(`${cont} valores positivos\n${media.toFixed(1)}`);