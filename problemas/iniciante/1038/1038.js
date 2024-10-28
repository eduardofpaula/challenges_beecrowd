const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

let [codigo, quantidade] = lines.shift().trim().split(' ').map((x) => parseInt(x));
let total;

switch(codigo){
    case 1: total = quantidade * 4.00;
            break;
    case 2: total = quantidade * 4.50;
            break;
    case 3: total = quantidade * 5.00;
            break;
    case 4: total = quantidade * 2.00;
            break;
    case 5: total = quantidade * 1.50;
            break;}

console.log(`Total: R$ ${total.toFixed(2)}`);