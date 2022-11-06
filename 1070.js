var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = Number(lines.shift());
let qtdImpar = 0;
while(qtdImpar !== 6){
    if(num % 2 !== 0){
        qtdImpar++;
        console.log(num);
    }
    num++;
}