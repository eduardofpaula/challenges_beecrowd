const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

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