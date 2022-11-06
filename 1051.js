var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = Number(lines.shift());
let imposto;
if(num <= 2000){
    console.log("Isento");
}else if(num > 2000 && num <= 3000){
    imposto = (num - 2000) * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
}else if(num > 3000 && num <= 4500){
    imposto = (num - 3000) * 0.18;
    num -= (num - 3000);
    imposto += (num - 2000) * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
}else{
    imposto = (num - 4500) * 0.28;
    num -= (num - 4500);
    imposto += (num - 3000) * 0.18;
    num -= (num - 3000);
    imposto += (num - 2000) * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
}