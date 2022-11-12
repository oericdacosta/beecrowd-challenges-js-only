var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let grenal = 1;
let [qtdgrenais, vitoraInter, vitoriaGremio, empates] = [0, 0, 0, 0];

while(grenal === 1){
    let [golInter, golGremio] = lines.shift().split(" ").map(x => Number(x));

    if(golGremio === golInter) empates++;
    (golGremio > golInter) ? vitoriaGremio++ : vitoraInter++;

    console.log("Novo grenal (1-sim 2-nao)");
    grenal = Number(lines.shift());
    
    qtdgrenais++;
}

console.log(`${qtdgrenais} grenais
Inter:${vitoraInter}
Gremio:${vitoriaGremio}
Empates:${empates}`);

if(vitoraInter === vitoriaGremio) console.log("Nao houve vencedor");
(vitoraInter > vitoriaGremio) ? console.log("Inter venceu mais") : console.log("Gremio venceu mais");