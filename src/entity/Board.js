const Dealer = require('./Dealer.js');

class Board {
    constructor(players) {
        this.players = players;
        this.season;
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

    grantSpringBonus() {
        const highestAttacks = this.players.map((player, index) => player.battleLine.highestAttackValue);
        const highestAttack = Math.max(...highestAttacks);

        this.players.forEach((player) => {
            if (player.battleLine.highestAttackValue === highestAttack) {
                player.battleLine.toggleSpringBonus(true);
            } else {
                player.battleLine.toggleSpringBonus(false);
            }
        });

        this.season = "spring";
    }

    resetBattleLines() {
        let discards = [];
        
        this.players.forEach((player) => {
            discards = discards.concat((player.battleLine.resetBattleLine()));
        });

        return discards;
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

        if (season === 'spring') {
            this.grantSpringBonus();
        }

        this.season = season;
    }

    displayPlayers() {
        console.log(JSON.stringify(this.players));
    }
}

module.exports = Board;