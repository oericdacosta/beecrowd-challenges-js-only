var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num, posicao;
let maiorAtual = 0;

for(let i = 0; i < 100; i++){
    num = Number(lines.shift());
    if(num > maiorAtual){
        maiorAtual = num;
        posicao = i + 1;
    }
}

console.log(maiorAtual);
console.log(posicao);
