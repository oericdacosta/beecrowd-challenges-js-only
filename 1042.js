var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numerosCrescente = lines.shift().split(" ").map(valor => parseInt(valor));
let numOriginal = [...numerosCrescente];

for( let j = 0; j< numerosCrescente.length; j++){
    let chave = numerosCrescente[j];
    let i = j-1;
    while(i > -1 && numerosCrescente[i] > chave){
        numerosCrescente[1+i] = numerosCrescente[i];
        i--;
    }
    numerosCrescente[i+1] = chave;
}

for(let num of numerosCrescente){
    console.log(num);
}

console.log("");

for(let num of numOriginal){
    console.log(num);
}