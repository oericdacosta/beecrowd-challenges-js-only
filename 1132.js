var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.map(x => Number(x));
let somaNum = 0;

if(x > y){
    for(i = x; i >= y; i--){
        if(i % 13 !== 0) somaNum += i;
    }
}else{
    for(i = x; i <= y; i++){
        if(i % 13 !== 0) somaNum += i;
    }
}

console.log(somaNum);
