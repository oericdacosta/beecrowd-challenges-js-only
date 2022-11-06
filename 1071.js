var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.map(x => Number(x));
let somaImpar = 0;

if(x > y){
    for(let i = x - 1; i > y; i--){
        if( i % 2 !== 0){
            somaImpar += i;
        }
    }
}else{
    for(let i = y - 1; i > x; i--){
        if( i % 2 !== 0){
            somaImpar += i;
        }
    }
}

console.log(somaImpar);