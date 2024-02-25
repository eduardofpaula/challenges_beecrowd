const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let number = lines.shift();
let cont = 0;
for(let i = 0; i < 6; i++){
  if(number > 0) cont++;
  number = lines.shift();
}
console.log(`${cont} valores positivos`);