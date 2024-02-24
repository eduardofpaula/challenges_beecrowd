const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

let [A, B, C] = lines.shift().trim().split(' ').map((x) => parseFloat(x));

if(A < B + C && B < A + C && C < A + B){
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
}else{
    console.log(`Area = ${((A + B)/2 * C).toFixed(1)}`);
}