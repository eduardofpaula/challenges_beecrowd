const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

const comp = (a, b) => a - b;

let V = lines.shift().trim().split(' ').map((x) => parseInt(x));
let v = [...V];

v.sort(comp);

for(let i = 0; i < 3; ++i){
    console.log(v[i]);
}
console.log();
for(let i = 0; i < 3; ++i){
    console.log(V[i]);
}