var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [horaInicio, minInicio, horaFim, minFim] = lines.shift().split(" ").map(x => Number(x));

if(minInicio > minFim){
    minFim += 60;
    horaFim--;
}

if(horaInicio > horaFim) horaFim += 24;

if(horaInicio === horaFim && horaFim === minInicio && minInicio === minFim){
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}else{
    console.log(`O JOGO DUROU ${horaFim - horaInicio} HORA(S) E ${minFim - minInicio} MINUTO(S)`);    
}
