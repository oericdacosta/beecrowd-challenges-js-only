var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let novoCalculo = 1;

while(novoCalculo === 1){
    let nota1 = Number(lines.shift());
    let nota2 = Number(lines.shift());
    while(nota1 < 0 || nota1 > 10 ){
        console.log("nota invalida");
        nota1 = Number(lines.shift());
    }
    while(nota2 < 0 || nota2 > 10){
        console.log("nota invalida");
        nota2 = Number(lines.shift());
    }
    let media = (nota1 + nota2) / 2;
    console.log(`media = ${media.toFixed(2)}`);
    do {
        console.log("novo calculo (1-sim 2-nao)");
        novoCalculo = Number(lines.shift());
    } while (novoCalculo !== 1 && novoCalculo !== 2);

}