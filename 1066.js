var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [qtdPar, qtdImpar, qtdPosi, qtdNeg] = [0, 0, 0, 0];

for(let i = 0; i < 5; i++){
    let num = Number(lines.shift());
    if(num % 2 === 0){
        qtdPar++;
    }else{
        qtdImpar++;
    }

    if(num > 0){
        qtdPosi++;
    }else if(num < 0){
        qtdNeg++;
    }
}

console.log(`${qtdPar} valor(es) par(es)`);
console.log(`${qtdImpar} valor(es) impar(es)`);
console.log(`${qtdPosi} valor(es) positivo(s)`);
console.log(`${qtdNeg} valor(es) negativo(s)`);