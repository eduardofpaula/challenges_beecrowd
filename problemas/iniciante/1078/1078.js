const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

var N = parseInt(lines.shift());

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${N} = ${i * N}`);
}
