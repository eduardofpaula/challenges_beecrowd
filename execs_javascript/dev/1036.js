const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let [a, b, c] = lines.shift().trim().split(" ").map((x) => parseFloat(x));

let delta = b * b - 4 * a * c;

if (a !== 0 && delta > -1) {
  let R1 = (-b + Math.sqrt(delta)) / (2 * a);
  let R2 = (-b - Math.sqrt(delta)) / (2 * a);

  console.log(`R1 = ${R1.toFixed(5)}`);
  console.log(`R2 = ${R2.toFixed(5)}`);
} else {
  console.log("Impossivel calcular");
}