function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [a, b, c] = lines.join(" ").split(" ");
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    let maiorNum = oMaior(a, b, c);
    console.log(`${maiorNum} eh o maior`);
}
main();

function oMaior(a, b, c){
    if(a > b && b > c) return (a + b + Math.abs(a - b))/2;

    if(a > c && c > b) return (a + c + Math.abs(a - c))/2;

    return (b + c + Math.abs(b - c))/2;
}