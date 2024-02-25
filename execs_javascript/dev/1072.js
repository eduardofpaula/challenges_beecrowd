const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let X = lines.shift();
let Y = lines.shift();
let i = 0;
let out = 0;
let In = 0; 

while(i < X){
  Y <= 20 && Y >= 10 ? In++ : out++;
  i++;
  Y = lines.shift();
  }

console.log(`${In} in`);
console.log(`${out} out`);for (let i=2; i<=100; i+=2)  {
	console.log(i);
}