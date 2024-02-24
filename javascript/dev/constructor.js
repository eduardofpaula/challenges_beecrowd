//leitura das linhas no arquivo stdin

const path = require('path');
const currentFile = path.dirname(process.argv[1]);

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// tipos de leitura que podem ajudar
var A = Number(lines[0])
var B = Number(lines[1])