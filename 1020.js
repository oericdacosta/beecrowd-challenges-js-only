function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let ano, mes;
    let idadeDias = parseInt(lines.shift());
    ano = parseInt(idadeDias / 365);
    idadeDias = idadeDias % 365;
    mes = parseInt(idadeDias / 30);
    idadeDias = idadeDias % 30;


let resultado = `${ano} ano(s)
${mes} mes(es)
${idadeDias} dia(s)`;

console.log(resultado);
}
main();
