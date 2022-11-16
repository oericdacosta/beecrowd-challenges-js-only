var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

lines = lines.map(x => Number(x));
let [qtdAlcool, qtdGasolina, qtdDiesel] = [0, 0, 0];

for(let i = 0; i < lines.length; i++){
    let num = lines[i];

    if(num >= 1 && num <= 4){

        switch (num) {
            case 1:
                qtdAlcool++;
                break;
            case 2:
                qtdGasolina++;
                break;
            case 3:
                qtdDiesel++;
                break;
            case 4:
                i = lines.length;
                break;
        }
    }
}

console.log(`MUITO OBRIGADO
Alcool: ${qtdAlcool}
Gasolina: ${qtdGasolina}
Diesel: ${qtdDiesel}`);
