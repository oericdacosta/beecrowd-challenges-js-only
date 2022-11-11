var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let qtdCasos = Number(lines.shift());
for(let i = 0; i < qtdCasos; i++){
    let somaImpar = 0;
    let [num1, num2] = lines.shift().split(" ").map(x => Number(x));
    if(num1 >= num2){
        for(let j = ++num2; j < num1; j++){
            if(j % 2 !== 0) somaImpar += j;
        }
    }else{
        for(let j = ++num1;j < num2;j++){
            if(j % 2 !== 0) somaImpar += j;
        }
    }
    console.log(somaImpar);
}