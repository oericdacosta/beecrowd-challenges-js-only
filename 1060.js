var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdNumPositivos = 0;

for(let i = 0; i < lines.length; i++){
    if(lines[i] > 0) qtdNumPositivos++;
}

console.log(`${qtdNumPositivos} valores positivos`);