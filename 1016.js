function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let distancia = parseInt(lines.shift());
    let tempoPercorrido = distancia * 2;
    console.log(`${tempoPercorrido} minutos`);
}
main();