var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdValores = Number(lines.shift());
for(let i = 0; i < qtdValores; i++){
    let [x, y] = lines.shift().trim("\r").split(" ").map(x => Number(x));

    let div = x / y;

    if(Number.isNaN(div) || Number.isNaN(div) || !Number.isFinite(div) || !Number.isFinite(div)){
        console.log("divisao impossivel")
    }else{
        console.log(div.toFixed(1));
    }
}