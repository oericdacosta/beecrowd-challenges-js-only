var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines = lines.shift().split(" ").map(vallor => parseFloat(vallor));

for( let j = 0; j< lines.length; j++){
    let chave = lines[j];
    let i = j-1;
    while(i > -1 && lines[i] > chave){
        lines[1+i] = lines[i];
        i--;
    }
    lines[i+1] = chave;
}
let [c, b, a] = lines;

if(a >= b + c){
    console.log("NAO FORMA TRIANGULO");
}else{
    if(Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)){
        console.log("TRIANGULO RETANGULO");
    }else if(Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)){
        console.log("TRIANGULO OBTUSANGULO");
    }else{
        console.log("TRIANGULO ACUTANGULO");
    }

    if(a === b && b === c){
        console.log("TRIANGULO EQUILATERO");
    }else if(a === b || a === c || b === c){
        console.log("TRIANGULO ISOSCELES");
    }
}