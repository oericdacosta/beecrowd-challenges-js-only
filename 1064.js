var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let mediaNumPositivo = 0;
let qtdNumPositivos = 0;
for(let i = 0; i < 6; i++){
    let numeros = parseFloat(lines.shift());
    if(numeros > 0){
        qtdNumPositivos++;
        mediaNumPositivo += numeros;
    }
}
console.log(`${qtdNumPositivos} valores positivos`);
console.log(`${(mediaNumPositivo / qtdNumPositivos).toFixed(1)}`);