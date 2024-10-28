const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let X = lines.shift();
let Y = lines.shift();
let i = 0;
let out = 0;
let In = 0; 

while(i < X){
  Y <= 20 && Y >= 10 ? In++ : out++;
  i++;
  Y = lines.shift();
  }

console.log(`${In} in`);
console.log(`${out} out`);for (let i=2; i<=100; i+=2)  {
	console.log(i);
}