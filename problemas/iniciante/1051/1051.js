const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

var salario = parseFloat(lines.shift());
var imposto;
if (salario >= 0 && salario <= 2000) {
    console.log('Isento');
} else if (salario > 2000 && salario <= 3000) {
    imposto = (salario - 2000) * 0.08;
    console.log('R$ ' + imposto.toFixed(2));
} else if (salario > 3000 && salario <= 4500) {
    imposto = ((salario - 3000)  * 0.18) + 80;
    console.log('R$ ' + imposto.toFixed(2));
} else {
    imposto = ((salario - 4500) * 0.28) + 350;
    console.log('R$ ' + imposto.toFixed(2));
}