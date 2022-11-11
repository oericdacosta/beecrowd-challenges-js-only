var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdTestes = Number(lines.shift());
let [qtdTotal, coelho, rato, sapo] = [0, 0, 0, 0];

for(let i = 0; i < qtdTestes; i++){
    
    let [qtdCobaia, cobaia] = lines.shift().trim("\r").split(" ").map(x => !isNaN(x) ? Number(x) : String(x));
    
    qtdTotal += qtdCobaia;
    
    switch(cobaia){
        case "C":
            coelho += qtdCobaia;
            break;
        case "R":
            rato += qtdCobaia;
            break;
        case "S":
            sapo += qtdCobaia;
            break;
    }
}

console.log(`Total: ${qtdTotal} cobaias`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de sapos: ${sapo}`);
console.log(`Percentual de coelhos: ${((coelho / qtdTotal) * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((rato / qtdTotal) * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((sapo / qtdTotal) * 100).toFixed(2)} %`);