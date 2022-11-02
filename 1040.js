var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [nota1, nota2, nota3, nota4] =lines.shift().split(" ").map(valor => parseFloat(valor));

let media  = ((nota1 * 2) + (nota2 * 3) + (nota3 * 4) + (nota4 * 1)) / 10;

console.log(`Media: ${media.toFixed(1)}`);
if(media >= 7){
    console.log("Aluno aprovado.");
}else if (media < 5){
    console.log("Aluno reprovado.");
}else{
    console.log("Aluno em exame.");
    notaExame = parseFloat(lines.shift()); 
    console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
    if(notaExame + media / 2 > 5){
        console.log("Aluno aprovado.");
    }
    else{
        console.log("Aluno reprovado.");
    }
    console.log(`Media final: ${((notaExame + media ) / 2).toFixed(1)}`);
}