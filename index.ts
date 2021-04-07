import {Pokemon} from "./pokemon";

const pokemon1 = new Pokemon({name:"poke1"});
const pokemon2 = new Pokemon({name:"poke2"});

function firstAttack(poke1: Pokemon, poke2: Pokemon, ):Pokemon {
    if(poke1.speed > poke2.speed){
        return poke1;
    }
    if(poke1.speed < poke2.speed){
        return poke2;
    }
    return poke1;
}

const first = firstAttack(pokemon1,pokemon2);
console.log("Le premier attaquant est "+first.name+" avec "+first.health+" points de vie et une vitesse de "+first.speed+". \n");
