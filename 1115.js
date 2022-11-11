var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let conjuntoCoord = lines.join("\r").split("\r").filter(x => x !== "");

for(let coord of conjuntoCoord){
    let [x, y] = coord.split(" ").map(x => Number(x));

    if(x > 0 && y > 0){
        console.log("primeiro");
    }else if( x < 0 && y > 0){
        console.log("segundo");
    }else if(x < 0 && y < 0){
        console.log("terceiro");
    }else if(x > 0 && y < 0){
        console.log("quarto");
    }
}