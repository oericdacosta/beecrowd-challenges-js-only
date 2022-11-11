var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let conjuntoPares = lines.join("\r").split("\r").filter(x => x !== "");

for(let pares of conjuntoPares){
    let [n1, n2] = pares.split(" ").map(x => Number(x));
    let sum = 0;
    let sequencia = "";

    if(n1 > n2 && n2 > 0){
        for(let i = n2; i <= n1; i++){
            sum += i;
            sequencia += i;
        }
        console.log(sequencia.split("").join(" "), `Sum=${sum}`);
    }else if(n2 > n1 && n1 > 0){
        for(let i = n1; i <= n2; i++){
            sum += i;
            sequencia += i;
        }
        console.log(sequencia.split("").join(" "), `Sum=${sum}`);
    }
}