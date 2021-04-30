import {firstAttack, winner} from "./index";
import {Pokemon} from "./pokemon";

const pokemon1 = new Pokemon({name: "poke1", health: 10, speed: 10});
const pokemon2 = new Pokemon({name: "poke2", health: 0, speed: 12});

describe("test firstAttack function", () => {
    it("should return pokemon2 for firstAttack)", () => {
        expect(firstAttack(pokemon1, pokemon2)).toBe(pokemon2);
    });
});

describe("test winner function", () => {
    it("should return the winner", () => {
        expect(winner(pokemon1, pokemon2)).toBe(pokemon1);
    });
});