const Dealer = require('./Dealer.js');

class Board {
    constructor(players) {
        this.players = players;
        this.dealer = new Dealer();
    }

    addPlayer(player) {
        this.players.push(player);
    }

    bishopClear() {
        const highestAttacks = this.players.map((player, index) => player.highestAttackValue); 
        const highestAttack = Math.max(...highestAttack);
        const discards = [];

        this.players.forEach((player) => {
            if (player.highestAttackValue === highestAttack)
                discards.concat(player.battleLine.destroyHighestCards())
                // const removedCards = player.battleLine.removeCardsFromLine(player.highestAttackCard);
                // discards.push(removedCards);
        });

        return discards;
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