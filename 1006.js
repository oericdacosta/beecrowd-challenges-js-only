const mediaPonderada = (a, b, c) => (a*2 + b*3 + c*5) / 10;
function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let A = parseFloat(lines.shift());
    let B = parseFloat(lines.shift());
    let C = parseFloat(lines.shift());
    if(A < 0 || A > 10 && B < 0 || B > 10 && C < 0 || C > 10) return;
    let media = mediaPonderada(A, B, C);
    console.log(`MEDIA = ${media.toFixed(1)}`);

}

main();