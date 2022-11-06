var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let diaInicial = Number(lines.shift().split(" ").filter(x => Number(x)));
let [horaInicio, minInicio, segInicio] = lines.shift().split(":").map(x => Number(x));

let diaFim = Number(lines.shift().split(" ").filter(x => Number(x)));
let [horaFim, minFim, segFim] = lines.shift().split(":").map(x => Number(x));

if(segInicio > segFim){
    segFim += 60;
    minFim--;
}

if(minInicio > minFim){
    minFim += 60;
    horaFim--;
}

if(horaInicio > horaFim){
    horaFim += 24;
    diaFim--;
}

console.log(`${diaFim - diaInicial} dia(s)
${horaFim - horaInicio} hora(s)
${minFim - minInicio} minuto(s)
${segFim - segInicio} segundo(s)`);