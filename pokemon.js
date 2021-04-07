"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name) {
        this.name = name;
        this.health = Math.floor(Math.random() * 200);
        this.speed = Math.floor(Math.random() * 20);
    }
    return Pokemon;
}());
exports.Pokemon = Pokemon;
