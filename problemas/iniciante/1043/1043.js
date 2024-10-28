const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let [A, B, C] = lines.shift().trim().split(' ').map((x) => parseFloat(x));

if(A < B + C && B < A + C && C < A + B){
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
}else{
    console.log(`Area = ${((A + B)/2 * C).toFixed(1)}`);
}