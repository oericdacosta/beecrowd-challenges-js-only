function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let qtdLitrosGasto = 12;
    let tempoGasto = parseInt(lines.shift());
    let velocidadeMedia = parseInt(lines.shift());
    let qtdLitrosNecessario = tempoGasto * velocidadeMedia / qtdLitrosGasto;
    console.log(qtdLitrosNecessario.toFixed(3));
}
main();