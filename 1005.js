const mediaPonderada = (A, B) => (A*3.5 + B*7.5) / (3.5 + 7.5);
function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let A = parseFloat(lines.shift());
    let B = parseFloat(lines.shift());
    let MEDIA = mediaPonderada(A, B);
    console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
}

main();