import {firstAttack} from "./index";
import {Pokemon} from "./pokemon";

const pokemon1 = new Pokemon({name:"poke1", speed:10});
const pokemon2 = new Pokemon({name:"poke2", speed:12});

describe("test firstAttack", () => {
    it("should return pokemon2 for firstAttack)", () => {
        expect(firstAttack(pokemon1, pokemon2)).toBe(pokemon2);
    });
});