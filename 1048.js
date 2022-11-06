var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines.shift());
let novoSalario;
if(salario >= 0 && salario <= 400){
    novoSalario = salario + (0.15 * salario);
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(0.15 * salario).toFixed(2)}`);
    console.log("Em percentual: 15 %");
}else if(salario > 400 && salario <= 800){
    novoSalario = salario + (0.12 * salario);
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(0.12 * salario).toFixed(2)}`);
    console.log(`Em percentual: 12 %`);
}else if(salario > 800 && salario <= 1200){
    novoSalario = salario + (0.10 * salario);
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(0.10 * salario).toFixed(2)}`);
    console.log(`Em percentual: 10 %`);
}else if(salario > 1200 && salario <= 2000){
    novoSalario = salario + (0.07 * salario);
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(0.07 * salario).toFixed(2)}`);
    console.log(`Em percentual: 7 %`);
}else{
    novoSalario = salario + (0.04 * salario);
    console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
    console.log(`Reajuste ganho: ${(0.04 * salario).toFixed(2)}`);
    console.log(`Em percentual: 4 %`);
}