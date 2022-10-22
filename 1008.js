const salarioFuncionario = (horasTrabalhadas, valorHora) => horasTrabalhadas * valorHora;
function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let numFuncionario = parseInt(lines.shift());
    let horasTrabalhadas = parseInt(lines.shift());
    let valorHora = parseFloat(lines.shift());
    console.log(`NUMBER = ${numFuncionario}`);
    console.log(`SALARY = u$ ${salarioFuncionario(horasTrabalhadas, valorHora).toFixed(2)}`);

}

main();