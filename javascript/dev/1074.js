const path = require("path");
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require("fs").readFileSync(currentFile + "\\stdin", "utf8");
var lines = input.split("\r\n");

// colar no beecrowd o codigo abaixo

var N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
  const num = lines.shift(i);
  if (num % 2 === 0 && num > 0) {
    console.log("EVEN POSITIVE");
  } else if (num % 2 === 0 && num < 0) {
    console.log("EVEN NEGATIVE");
  } else if (num % 2 != 0 && num > 0) {
    console.log("ODD POSITIVE");
  } else if (num % 2 != 0 && num < 0) {
    console.log("ODD NEGATIVE");
  } else {
    console.log("NULL");
  }
}
