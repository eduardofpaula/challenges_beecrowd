const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

const numeros = require('fs')
	.readFileSync('/dev/stdin', 'utf-8')
	.split('\n')
	.map(x => Number(x));

let pares = 0;
let impares = 0;
let positivos = 0;
let negativos = 0;

for (let i = 0; i < 5; i++) {
	if (numeros[i] % 2 === 0) {
		pares++;
	} else {
		impares++;
	}

	if (numeros[i] > 0) {
		positivos++;
	} else if (numeros[i] < 0) {
		negativos++;
	}
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);