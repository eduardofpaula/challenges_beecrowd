const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let [A, B, C, D] = lines.shift().trim().split(" ").map((x) => parseInt(x));

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {
  console.log("Valores aceitos");
    
} else {
  console.log("Valores nao aceitos");
}