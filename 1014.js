const consumoMedio = (distancia, combustivel) => distancia / combustivel;
function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let distanciaTotal = parseInt(lines.shift());
    let combustivelGasto = parseFloat(lines.shift());
    let consumo = consumoMedio(distanciaTotal, combustivelGasto);
    console.log(`${consumo.toFixed(3)} km/l`)
}
main();