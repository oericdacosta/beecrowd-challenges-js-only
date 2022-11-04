var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [horaInicio, horaFim] = lines.shift().split(" ").map(valor => parseInt(valor));
if(horaFim <= horaInicio){
    console.log(`O JOGO DUROU ${(24 - (horaInicio - horaFim))} HORA(S)`);
}else{
    console.log(`O JOGO DUROU ${(horaFim - horaInicio)} HORA(S)`);
}