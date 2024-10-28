const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

// colar no beecrowd o codigo abaixo

const A = parseInt(lines.shift())
const B = parseInt(lines.shift())

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