const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

var N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
  const [x,y,z] = lines.shift().trim().split(' ').map(parseFloat); 
   
  const media = ((x * 2) + (y * 3) + (z * 5)) / (2 + 3 + 5)
  const mediaCorreta = media.toFixed(1) 
  console.log(mediaCorreta) 
}
