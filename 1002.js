const areaCirculo = (raio, pi) => pi * raio * raio;
function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');
    
    let A = parseFloat(lines.shift());
    let pi = 3.14159;
    let area = areaCirculo(A, pi);
    console.log(`A=${area.toFixed(4)}`)
}
main();
