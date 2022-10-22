function main(){
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split('\n');

    let segundos = parseInt(lines.shift());
    console.log(formataHora(segundos))
}
main();

function formataHora(segundos){
    let [segundo, hora, minuto] = [0, 0, 0];
    for(let i = 0; i<segundos; i++){
        segundo++;
        if(segundo > 60){
            segundo = 1;
            minuto++;
        }
        if(minuto > 60){
            minuto = 1;
            hora++;
        }
    }
    return `${hora}:${minuto}:${segundo}`;
}