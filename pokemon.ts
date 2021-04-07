interface IPokemon{
    name: string;
    health?: number;
    speed?: number;
    attack?: number;
}

export class Pokemon implements IPokemon {

    name: string;
    health: number;
    speed: number;
    attack: number;

    constructor(props :IPokemon) {
        this.name = props.name;
        this.health = Math.floor(Math.random() * 200);
        this.speed = props.speed || Math.floor(Math.random() * 20);
        this.attack = props.attack || Math.floor(Math.random() * 100);
    }

    attackPokemon(advAttack: number){
        this.attack-=advAttack;
    }

}
