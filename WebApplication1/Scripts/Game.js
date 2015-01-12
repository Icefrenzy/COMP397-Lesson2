var Player = (function () {
    function Player() {
        this.strength = 10;
    }
    Player.prototype.fights = function () {
        console.log("Fight!");
    };
    return Player;
})();

function main() {
    var ice = new Player();
    ice.fights();
}
//# sourceMappingURL=Game.js.map
