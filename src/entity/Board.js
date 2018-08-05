const Dealer = require('./Dealer.js');

class Board {
    constructor(players) {
        this.players = players;
        this.dealer = new Dealer();
    }

    dealCards(numOfCards) {
        for(let i = 0; i < numOfCards; i++) 
            this.players.forEach((player) => this.dealer.dealCardToPlayer(player));
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