const volumeEsfera = (raio, pi) => (4/3) * pi * Math.pow(raio, 3);
function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let raioEsfera = parseFloat(lines.shift());
    let pi = 3.14159;
    let volume = volumeEsfera(raioEsfera, pi);
    console.log(`VOLUME = ${volume.toFixed(3)}`);
}
main();