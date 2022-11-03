var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines.shift());
let meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(meses[num - 1]);