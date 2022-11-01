function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let [a, b, c, d] = lines.join("").split(" ");

    if(b > c && d > a && c + d > (a + b) && c >= 0 && d >= 0 && (a % 2) === 0){
        console.log("Valores aceitos");
        return
    }
    console.log("Valores nao aceitos");
    return
}
main();