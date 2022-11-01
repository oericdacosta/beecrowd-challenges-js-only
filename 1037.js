var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let num = parseFloat(lines.shift());

if(num >= 0 && num <= 25) console.log("Intervalo [0,25]");
if(num > 25 && num <= 50) console.log("Intervalo (25,50]");
if(num > 50 && num <= 75) console.log("Intervalo (50,75]");
if(num > 75 && num <= 100) console.log("Intervalo (75,100]");
if(num < 0 || num > 100) console.log("Fora de intervalo");