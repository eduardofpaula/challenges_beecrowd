const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

var line = lines.shift().split(" ");
var italoInicio = parseInt(line[0]);
var thalesInicio = parseInt(line[1]);
var italoinicio = parseInt(line[2]);
var thalesinicio = parseInt(line[3]);
var totalM = (thalesinicio-thalesInicio);
var totalH = (italoinicio-italoInicio);
if (totalM < 0) 
{
    totalM += 60;
    totalH--;
}
if (totalH < 0) 
{
    totalH+=24;
}
if (italoInicio == italoinicio && thalesInicio == thalesinicio) console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
else console.log('O JOGO DUROU '+ totalH + ' HORA(S) E ' + totalM + ' MINUTO(S)');