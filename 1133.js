var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines.map(x => Number(x));

if(y > x){
    for(let i = x+1; i < y; i++){
        if(i % 5 === 2 || i % 5 === 3) console.log(i);
    }
}else{
    for(let i = y+1; i < x; i++){
        if(i % 5 === 2 || i % 5 === 3) console.log(i);
    }
}
