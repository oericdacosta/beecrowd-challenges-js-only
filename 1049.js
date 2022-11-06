var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [tipoVertebra, tipoAnimal, alimentacao] = lines;

if(tipoVertebra === "vertebrado"){
    if(tipoAnimal === "ave"){
        if(alimentacao === "carnivoro"){
            console.log("aguia");
        }
        if(alimentacao === "onivoro"){
            console.log("pomba");
        }
    }
    if (tipoAnimal === "mamifero"){
        if(alimentacao === "onivoro"){
            console.log("homem");
        }
        if (alimentacao === "herbivoro"){
            console.log("vaca");
        }
    }
}
if(tipoVertebra === "invertebrado"){
    if(tipoAnimal === "inseto"){
        if(alimentacao === "hematofago"){
            console.log("pulga");
        }
        if (alimentacao === "herbivoro"){
            console.log("lagarta");
        }
    }
    if(tipoAnimal === "anelideo"){
        if(alimentacao === "hematofago"){
            console.log("sanguessuga");
        }
        if(alimentacao === "onivoro"){
            console.log("minhoca")
        }
    }
}