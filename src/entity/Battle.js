const Board = require('./Board');


class Battle {
    constructor(players, board, dealer, goesFirst) {
        this.players = players;
        this.playerToAct = goesFirst;
        this.dealer = dealer;
        this.board = board;
        this.winner;
    }

    endBattle() {
        this.declareWinner();
        this.dealer.collectDiscards(this.board.resetBattleLines());
    }

    declareWinner() {
        let winners = [];
        let highestAttack = -1;

        this.players.forEach((player) => {
            if (player.highestAttackValue > highestAttack) {
                winners = [player];
            } else if (player.highestAttackValue === highestAttack) {
                winners.push(player);
            }
        });

        if (this.winner.length > 1) {
            this.winner = "tie";
        } else if (this.winner.length = 0) {
            throw new Error(`No winner found for Battle.`)
        } else {
            this.winner = winners.pop();
            this.winner.numTerritories++;
        }
    }

    turn(player, action, type, attackValue, swapCardType, swapCardAttackValue) {
        this.playerAction(player, action, type, attackValue, swapCardType, swapCardAttackValue);
        
        if (this.winner) {
            return winner;
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
            this.doSpecialActions(player, type, swapCardType, swapCardAttackValue);
        } else if (action === 'pass') {
            player.hasPassed = true;
        } else {
            throw new Error(`Invalid action detected in Battle`);
        }
    }

    findNextPlayerToAct() {
        let nextPlayerToAct;

        for (let i = 0; i < this.players.length && !nextPlayerToAct; i++) {
            let nextPlayerIndex = (this.players.indexOf(player) + 1) % this.players.length
            let candidate = this.players[nextPlayerIndex];
            if (candidate.hasAnyCards() && !candidate.hasPassed)
                nextPlayerToAct = candidate;
        }

        return nextPlayerToAct;
    }

    findWinner() {
        this.board.players.filter()
    }

    doSpecialActions(player, type, swapCardType, swapCardAttackValue) {
        switch (type) {
            case "scarecrow":
                player.battleLine.removeCardFromLine(swapCardType, swapCardAttackValue);
                break;
            case "bishop":
                dealer.collectDiscards(this.board.bishopClear());
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