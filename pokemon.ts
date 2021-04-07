interface IPokemon{
    name: string;
    health?: number;
    speed?: number;
}

export class Pokemon implements IPokemon {

    name: string;
    health: number;
    speed: number;

    constructor(props :IPokemon) {
        this.name = props.name;
        this.health = Math.floor(Math.random() * 200);
        this.speed = props.speed || Math.floor(Math.random() * 20);
    }

}
