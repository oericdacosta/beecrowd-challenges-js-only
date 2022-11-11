var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let notasValidas = 0;
let sumNotas = 0;

while(notasValidas < 2){
    let nota = Number(lines.shift());
    
    if(nota >= 0 && nota <= 10){
        sumNotas += nota;
        notasValidas++;
    }else{
        console.log("nota invalida");
    }

}
console.log(`media = ${(sumNotas / notasValidas).toFixed(2)}`);