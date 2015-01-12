class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }

    fights() {
        console.log("Fight!");
    }
}

function main() {
    var ice = new Player();
    ice.fights();
}