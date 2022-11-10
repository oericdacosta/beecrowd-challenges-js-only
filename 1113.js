var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdDuplas = lines.join("\n").split("\n").length;

for(let i = 0; i < qtdDuplas; i++){
    let [num1, num2] = lines.shift().split(" ").map(x => Number(x));
    if(num1 > num2){
        console.log("Decrescente");
    }else if(num1 < num2){
        console.log("Crescente");
    }
}
