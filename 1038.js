var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [codigo, qtd] = lines.shift().split(" ").map(valor => parseInt(valor));
let preco;
switch (codigo) {
    
    case 1:
        preco = qtd * 4.00;
        break;
    case 2:
        preco = qtd * 4.50;
        break;
    case 3:
        preco = qtd * 5.00;
        break;
    case 4:
        preco = qtd * 2.00;
        break;
    case 5:
        preco = qtd * 1.50;
        break;
}

console.log(`Total: R$ ${preco.toFixed(2)}`);