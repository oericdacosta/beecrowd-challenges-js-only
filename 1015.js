function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let p1 = criaPonto(lines.shift());
    let p2 = criaPonto(lines.shift());
    let distancia = calcDistancia(p1, p2);
    console.log(distancia.toFixed(4));
}
main();

function criaPonto(lines){
    return{
        x: parseFloat(lines.split(" ")[0]),
        y: parseFloat(lines.split(" ")[1]),
    }
}

function calcDistancia(p1, p2){
    return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
}