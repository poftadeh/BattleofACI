const Board = require('./Board');


class Battle {
    constructor(players, goesFirst) {
        this.players = players;
        this.playerToAct = goesFirst;
        this.board = new Board(players);
        this.victor;
    }

    startBattle() {
        while (!this.victor) {
            this.turn(this.turnPlayer)
        }
    }

    turn(player, action) {
        if (player !== this.playerToAct) 
            return new Error(`It's not ${player} turn it's ${this.playerToAct}.`)

        if (action.type) {
            this.player.addCardToBattleLine(card);
            doSpecialActions(action);
        } else if (action === 'Pass') {
            this.player.hasPassed = true;
        } else {
            throw new Error(`Invalid action detected in Battle`);
        }
    }

    findWinner() {
        this.board.players.filter()
    }

    doSpecialActions(card) {
        switch (card.type) {
            case "bishop": 
                board.bishopClear();
                break;
            case "winter":
                board.setSeasons("winter");
                break;
            case "spring":
                board.setSeasons("spring");
                break;
            case "surrender": 
                
        }
    }

}