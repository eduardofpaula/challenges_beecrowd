const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let [x, y] = lines.shift().trim().split(" ").map((x) => parseFloat(x));

if (x > 0.0) {
  if (y > 0.0)       console.log("Q1");
  else if (y < 0.0)  console.log("Q4");
  else               console.log("Eixo X");
} else if (x < 0.0) {
  if (y > 0.0)       console.log("Q2");
  else if (y < 0.0)  console.log("Q3");
  else               console.log("Eixo X");
} else {
  if (y > 0.0)       console.log("Eixo Y");
  else if (y < 0.0)  console.log("Eixo Y");
  else               console.log("Origem");
}