const { join, resolve, dirname } = require('path');
const { readFileSync } = require('fs');
const stdinPath = join(resolve(dirname(__filename), '..'), 'stdin');
const lines = readFileSync(stdinPath, 'utf8').split('\r\n');

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