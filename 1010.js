function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let peca1 = criaPeca(lines.shift());
    let peca2 = criaPeca(lines.shift())
    let valorAPagar = peca1.valorTotal() + peca2.valorTotal();
    console.log(`VALOR A PAGAR: R$ ${valorAPagar.toFixed(2)}`);
}
main();

function criaPeca(lines){
    let [codigo, qtdPecas, valor] = lines.split(" ");
    return{
        codigo: codigo,
        qtdPecas: qtdPecas,
        valor: valor,
        valorTotal(){
            return qtdPecas * valor;
        }
    }
}