import {Pokemon} from "./pokemon";

const pokemon1 = new Pokemon({name: "poke1"});
const pokemon2 = new Pokemon({name: "poke2"});

runFight(pokemon1, pokemon2);

export function runFight(p1: Pokemon, p2: Pokemon) {
    const first = firstAttack(p1, p2);
    if (first === p1) {
        var adv = p2;
    } else {
        var adv = p1;
    }
    turnsFight(first, adv);
    winner(first, adv);
}

export function firstAttack(poke1: Pokemon, poke2: Pokemon,): Pokemon {
    if (poke1.speed > poke2.speed) {
        return poke1;
    }
    if (poke1.speed < poke2.speed) {
        return poke2;
    }
    return poke1;
}

export function turnsFight(first: Pokemon, adv: Pokemon) {
    console.log(adv.name + "\npoints de vie: " + adv.health + "\nvitesse: " + adv.speed + ". \n" + "attaque: " + adv.attack + ". \n");
    console.log(first.name + "\npoints de vie: " + first.health + "\nvitesse: " + first.speed + ". \n" + "attaque: " + first.attack + ". \n");
    console.log("Début du combat");
    let turn = 1;
    do {
        console.log("Tour " + turn + ":");
        if (turn % 2 == 0) {
            console.log(first.name + " attaque " + adv.name + " avec " + first.attack + " points d'attaque.\n");
            adv.health -= first.attack;
        } else {
            console.log(adv.name + " attaque " + first.name + " avec " + adv.attack + " points d'attaque.\n");
            first.health -= adv.attack;
        }
        turn++;
    } while (first.health >= 0 && adv.health >= 0);
}

export function winner(p1: Pokemon, p2: Pokemon) {
    let gagnant;
    if (p1.health >= 0) {
        gagnant = p1;
    } else {
        gagnant = p2;
    }
    console.log("Le gagnant est " + gagnant.name + " avec " + gagnant.health + " points de vie.")
}