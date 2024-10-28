const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

var N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
  const num = lines.shift(i);
  if (num % 2 === 0 && num > 0) {
    console.log("EVEN POSITIVE");
  } else if (num % 2 === 0 && num < 0) {
    console.log("EVEN NEGATIVE");
  } else if (num % 2 != 0 && num > 0) {
    console.log("ODD POSITIVE");
  } else if (num % 2 != 0 && num < 0) {
    console.log("ODD NEGATIVE");
  } else {
    console.log("NULL");
  }
}
