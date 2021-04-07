"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pokemon_1 = require("./pokemon");
var pokemon1 = new pokemon_1.Pokemon("poke1");
var pokemon2 = new pokemon_1.Pokemon("poke2");
function firstAttack(poke1, poke2) {
    if (poke1.speed > poke2.speed) {
        return poke1;
    }
    if (poke1.speed < poke2.speed) {
        return poke2;
    }
    return poke1;
}
var first = firstAttack(pokemon1, pokemon2);
console.log("Le premier attaquant est " + first.name + " avec " + first.health + " points de vie et une vitesse de " + first.speed + ". \n");
