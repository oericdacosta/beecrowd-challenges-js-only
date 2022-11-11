var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = Number(lines.shift());

for(let i = 1; i <= 10; i++){
    console.log(`${i} x ${num} = ${i * num}`);
}