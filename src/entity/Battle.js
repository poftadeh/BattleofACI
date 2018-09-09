const Board = require('./Board');


class Battle {
    constructor(players, board, dealer, goesFirst) {
        this.players = players;
        this.playerToAct = goesFirst;
        this.dealer = dealer;
        this.board = board;
        this.winner;
        console.log("new battle", this.players);
    }

    endBattle() {
        this.declareWinner();
    }
    
    declareWinner() {
        let winners = [];
        let highestTotalAttack = -1;

        this.players.forEach((player) => {
            if (player.battleLine.totalAttack > highestTotalAttack) {
                winners = [player];
                highestTotalAttack = player.battleLine.totalAttack;
            } else if (player.battleLine.totalAttack === highestTotalAttack) {
                winners.push(player);
            }
        });

        if (winners.length > 1) {
            this.winner = "tie";
        } else if (winners.length === 1) {
            this.winner = winners.pop();
            this.winner.addTerritory();
        } else {
            throw new Error(`No winner found for Battle.`)
        }
    }

    turn(player, action, type, attackValue, swapCardType, swapCardAttackValue) {
        this.playerAction(player, action, type, attackValue, swapCardType, swapCardAttackValue);
        
        if (this.winner) {
            return this.winner;
        }

        this.playerToAct = this.findNextPlayerToAct();

        if (!this.playerToAct) {
            this.endBattle();
        }
    }

    playerAction(player, action, type, attackValue, swapCardType, swapCardAttackValue) {
        if (player !== this.playerToAct)
            throw new Error(`It's not ${player.name}'s turn. It's ${this.playerToAct.name} who should act.`)

        if (player.hasPassed) {
            throw new Error(`${player.name} has passed and cannot have a turn.`)
        }

        if (action === 'play') {
            player.addCardToBattleLine(type, attackValue);
            this.performSpecialActions(player, type, swapCardType, swapCardAttackValue);
        } else if (action === 'pass') {
            player.hasPassed = true;
        } else {
            throw new Error(`Invalid action detected in Battle`);
        }

        // don't grant bonus if card played is spring, since it was already done above.
        //
        if (this.board.season === "spring" && type !== "spring" && !this.winner) {
            this.board.grantSpringBonus();
        }
    }

    findNextPlayerToAct() {
        let nextPlayerToAct;
        let nextPlayerIndex = (this.players.indexOf(this.playerToAct) + 1) % this.players.length

        for (let i = 0; i < this.players.length && !nextPlayerToAct; i++) {
            let candidate = this.players[nextPlayerIndex];
            if (candidate.hasAnyCards() && !candidate.hasPassed) {
                nextPlayerToAct = candidate;
            } else {
                nextPlayerIndex = (nextPlayerIndex + 1) % this.players.length;
            }
        }

        return nextPlayerToAct;
    }

    performSpecialActions(player, type, swapCardType, swapCardAttackValue) {
        switch (type) {
            case "scarecrow":
                const removedCard = player.battleLine.removeCardFromLine(swapCardType, swapCardAttackValue);
                if (removedCard.type !== "mercenary") {
                    throw new Error(`A ${removedCard.type} card cannot be swapped out!`);
                }
                player.hand.addCard(removedCard);
                break;
            case "bishop":
                this.dealer.collectDiscards(this.board.bishopClear());
                break;
            case "winter":
                this.board.setSeasons("winter");
                break;
            case "spring":
                this.board.setSeasons("spring");
                break;
            case "surrender":
                this.endBattle();
                break;
        }
    }
}

module.exports = Battle;