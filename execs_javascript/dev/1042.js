const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

const comp = (a, b) => a - b;

let V = lines.shift().trim().split(' ').map((x) => parseInt(x));
let v = [...V];

v.sort(comp);

for(let i = 0; i < 3; ++i){
    console.log(v[i]);
}
console.log();
for(let i = 0; i < 3; ++i){
    console.log(V[i]);
}