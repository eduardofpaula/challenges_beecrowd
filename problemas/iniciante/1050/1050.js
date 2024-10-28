const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

var DDITALO = parseInt(lines.shift());
switch (DDITALO) {
    case 61: console.log('Brasilia'); break;
    case 71: console.log('Salvador'); break;
    case 11: console.log('Sao Paulo'); break;
    case 21: console.log('Rio de Janeiro'); break;
    case 32: console.log('Juiz de Fora'); break;
    case 19: console.log('Campinas'); break;
    case 27: console.log('Vitoria'); break;
    case 31: console.log('Belo Horizonte'); break;
    default: console.log('DDD nao cadastrado');
}