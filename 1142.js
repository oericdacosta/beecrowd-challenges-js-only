var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdItens = 4 * Number(lines.shift());
for(let i = 1; i <= qtdItens; i+=4){
    console.log(`${i} ${i+1} ${i+2} PUM`);
}
