var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let pares = 0;

for(let i = 0; i < 5; i++){
    let num = Number(lines.shift());
    if(num % 2 === 0) pares++;
}

console.log(`${pares} valores pares`);
