const path = require('path');
const currentFile = path.dirname(process.argv[1]);
//leitura das linhas no arquivo stdin

var input = require('fs').readFileSync(currentFile + '\\stdin', 'utf8');
var lines = input.split('\r\n');

// colar no beecrowd o codigo abaixo

var prompt = function(texto) { return lines.shift();};
var A = prompt('Digite o valor de A')
var B = prompt('Digite o valor de B')
var C = prompt('Digite o valor de C')

if (A == 'vertebrado')
{
    if(B == 'ave')
    {
        if(C == 'onivoro')
        {
            console.log('pomba')
        }
        if(C == 'carnivoro')
        {
            console.log('aguia')
        }
    }
    if(B == 'mamifero')
    {
        if(C == 'onivoro')
        {
            console.log('homem')
        }
        if(C == 'herbivoro')
        {
            console.log('vaca')
        }
    }
}
if (A == 'invertebrado')
{
    if(B == 'inseto')
    {
        if(C == 'hematofago')
        {
            console.log('pulga')
        }
        if(C == 'herbivoro')
        {
            console.log('lagarta')
        }
    }
    if(B == 'anelideo')
    {
        if(C == 'hematofago')
        {
            console.log('sanguessuga')
        }
        if(C == 'onivoro')
        {
            console.log('minhoca')
        }
    }
}