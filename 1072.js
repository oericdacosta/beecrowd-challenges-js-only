var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdNum = Number(lines.shift());
let nums = [];
let [dentro, fora] = [0, 0];

for(i = 0; i < qtdNum; i++){
    nums.push(Number(lines.shift()));
    (nums[i] >= 10 && nums[i] <= 20) ? dentro++ : fora++;
}

console.log(`${dentro} in
${fora} out`);