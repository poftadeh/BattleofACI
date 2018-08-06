const Dealer = require('./Dealer.js');

class Board {
    constructor(players) {
        this.players = players;
    }

    addPlayer(player) {
        this.players.push(player);
    }

    bishopClear() {
        const highestAttacks = this.players.map((player, index) => player.battleLine.highestAttackValue); 
        const highestAttack = Math.max(...highestAttacks);
        let discards = [];

        this.players.forEach((player) => {
            if (player.battleLine.highestAttackValue === highestAttack) {
                const removedCards = player.battleLine.destroyHighestCards();
                discards = discards.concat(removedCards);
            }
        });

        return discards;
    }

    resetBattleLines() {
        this.players.forEach((player) => player.battleLine.resetBattleLine());
    }

    resetSpringBonus() {
        this.players.forEach((player) => player.battleLine.setSpringBonus(false));
    }

    calculateTotalAttacks() {
        this.players.forEach((player) => player.battleLine.calculateTotalAttack());
    }

    setSeasons(season) {
        if (season !== "winter" && season !== "spring") {
            throw new Error(`${season} is not a valid season.`);
        }
        else {
            this.players.forEach((player) => player.battleLine.setSeason(season));
        }
    }

    displayPlayers() {
        console.log(JSON.stringify(this.players));
    }
}

module.exports = Board;