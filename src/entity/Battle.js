const Board = require('./Board');


class Battle {
    constructor(players, board, dealer, goesFirst) {
        this.players = players;
        this.playerToAct = goesFirst;
        this.dealer = dealer;
        this.board = board;
        this.victor;
    }

    startBattle() {
        while (!this.victor) {
            this.turn(this.turnPlayer)
        }
    }

    // if there is an action, the type and attackValue arguments will be passed
    //
    turn(player, action, type, attackValue) {
        if (player !== this.playerToAct) 
            return new Error(`It's not ${player} turn it's ${this.playerToAct} who should act.`)

        if (action === 'play') {
            player.addCardToBattleLine(type, attackValue);
            this.doSpecialActions(type);
        } else if (action === 'pass') {
            player.hasPassed = true;
        } else {
            throw new Error(`Invalid action detected in Battle`);
        }
    }

    findWinner() {
        this.board.players.filter()
    }

    doSpecialActions(type) {
        switch (type) {
            case "bishop": 
                this.board.bishopClear();
                break;
            case "winter":
                this.board.setSeasons("winter");
                break;
            case "spring":
                this.board.setSeasons("spring");
                break;
            case "surrender": 
                
        }
    }

}

module.exports = Battle;