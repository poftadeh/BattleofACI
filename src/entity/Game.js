const Battle = require('./Battle.js');
const Dealer = require('./Dealer.js');
const Board = require('./Board.js');

class Game {
    constructor(players) {
        this.players = players;
        this.dealer = new Dealer();
        this.board = new Board(players);
        this.goesFirst = players[Math.floor(Math.random() * players.length)];
        this.battle;
        this.gameOver;
        this.numTerritoriesToWin = 4;

        this.startNewBattle();
    }

    checkGameOver() {
        this.players.forEach((player) => {
            if(player.territories >= this.numTerritoriesToWin)
                this.gameOver = true;
        });
    }

    startNewBattle() {
        if (!this.gameOver) {
            this.dealer.shuffleDeck();
            this.dealer.dealCardsToAllPlayers(3);
            this.battle = new Battle(this.players, this.board, this.dealer, this.goesFirst);
        }
    }

}