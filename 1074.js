var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdNum = Number(lines.shift());

for(let i = 0; i < qtdNum; i++){
    let num = Number(lines.shift());

    if(num > 0){
        if(num % 2 === 0){
            console.log("EVEN POSITIVE");
        }else{
            console.log("ODD POSITIVE");
        }
    }else if(num < 0){
        if(num % 2 === 0){
            console.log("EVEN NEGATIVE");
        }else{
            console.log("ODD NEGATIVE");
        }
    }else{
        console.log("NULL");
    }
}