function criaVendedor(lines){
    let [nome, salario, totalVendas] = [lines.shift(), parseFloat(lines.shift()), parseFloat(lines.shift())];
    return {
        nome: nome,
        salario: salario,
        totalVendas: totalVendas,
        salarioBonus(){
            return salario += totalVendas * 0.15;
        }
    }
}

function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let vendedor = criaVendedor(lines);
    console.log(`TOTAL = R$ ${vendedor.salarioBonus().toFixed(2)}`);
}

main();