import {Pokemon} from "./pokemon";

const pokemon1 = new Pokemon({name:"poke1"});
const pokemon2 = new Pokemon({name:"poke2"});

runFight(pokemon1,pokemon2);

export function firstAttack(poke1: Pokemon, poke2: Pokemon, ):Pokemon {
    if(poke1.speed > poke2.speed){
        return poke1;
    }
    if(poke1.speed < poke2.speed){
        return poke2;
    }
    return poke1;
}

export function runFight(p1: Pokemon, p2: Pokemon){
    const first = firstAttack(p1,p2);
    if(first === p1){
        var adv = p2;
    }else{
        var adv = p1;
    }
    console.log(adv.name+"\npoints de vie: "+adv.health+"\nvitesse: "+adv.speed+". \n");
    console.log(first.name+"\npoints de vie: "+first.health+"\nvitesse: "+first.speed+". \n");
    let turn = 0;
    while(first.health>=0 && adv.health>=0){
        if(turn%2 == 0){
            adv.attackPokemon(first.attack);
        }else{
            first.attackPokemon(adv.attack);
        }
    }
    console.log(adv.name+"\npoints de vie: "+adv.health+"\nvitesse: "+adv.speed+". \n");
    console.log(first.name+"\npoints de vie: "+first.health+"\nvitesse: "+first.speed+". \n");
}