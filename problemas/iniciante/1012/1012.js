const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');

// Constrói o caminho completo do arquivo 'stdin' no diretório pai
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');

// Lê o conteúdo do arquivo stdin
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

const PI = 3.14159;

let [A, B, C] = lines.shift().split(" ").map((x) => parseFloat(x));

const areaTriangulo = (A * C) / 2;
const areaCirculo = PI * C * C;
const areaTrapezio = ((A + B) / 2) * C;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);