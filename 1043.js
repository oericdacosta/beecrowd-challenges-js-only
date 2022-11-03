var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c] = lines.shift().split(" ").map(valor => parseFloat(valor));

if(a+b > c && a+c > b && b+c > a){
    let perimetro = a + b + c;
    console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}else{
    let area = ((a + b) * c) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}