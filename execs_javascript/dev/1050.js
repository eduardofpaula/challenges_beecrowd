const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

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