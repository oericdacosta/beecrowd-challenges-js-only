var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines = lines.shift().split(" ").map(valor => parseFloat(valor));
let coord = {
    x: lines.shift(),
    y: lines.shift(),
}

if(coord.x > 0 && coord.y > 0){
    console.log("Q1");
}else if(coord.x < 0 && coord.y > 0){
    console.log("Q2");
}else if(coord.x < 0 && coord.y < 0){
    console.log("Q3");
}else if(coord.x > 0 && coord.y < 0){
    console.log("Q4");
}else if(coord.x === 0 && coord.y === 0){
    console.log("Origem");
}else if(coord.x === 0){
    console.log("Eixo Y");
}else if (coord.y === 0){
    console.log("Eixo X");
}