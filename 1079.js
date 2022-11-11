var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let numTestes = Number(lines.shift());

for(let i = 0; i < numTestes; i++){
    let notas = lines.shift().split(" ").map(x => Number(x));
    let [nota1, nota2, nota3] = notas;

    let mediaPonderada = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    console.log(mediaPonderada.toFixed(1));
}