const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

const A = parseInt(valores.shift())
const B = parseInt(valores.shift())

const gameDuration = () => {
  const totalDayMinusTotalHours = 24 - A + B

  if (A == B) {
    return console.log(`O JOGO DUROU ${totalDayMinusTotalHours} HORA(S)`)
  }

  if (A <= B) {
    return console.log(`O JOGO DUROU ${B - A} HORA(S)`)
  }

  return console.log(`O JOGO DUROU ${totalDayMinusTotalHours} HORA(S)`)
}

gameDuration()