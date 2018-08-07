const Battle = require('./Battle.js');
const Dealer = require('./Dealer.js');
const Board = require('./Board.js');

class Game {
    constructor(playerNames) {
        this.playerNames = playerNames;
        this.players = [];
        this.gameOver;
        this.numTerritoriesToWin = 4;
        this.startNewGame();
    }

    getState() {
        return JSON.stringify(this.players);
    }

    startNewGame() {
        this.createPlayers();
        this.battle;
        this.board = new Board(this.players);
        this.goesFirst = players[Math.floor(Math.random() * players.length)];
        this.dealer = new Dealer();
        this.dealer.shuffleDeck();
        this.dealer.dealCardsToAllPlayers(7);
        this.startNewBattle();
    }

    action(player, action, type, attackValue, swapCardType, swapCardAttackValue) {
        if (this.battle && player === this.getPlayerTurn())
            this.battle.turn(player, action, type, attackValue, swapCardType, swapCardAttackValue);
        else
            return { message: `Not ${player.name}'s turn to act!'` };
    }

    getPlayerTurn() {
        return this.battle.playerToAct;
    }

    createPlayers() {
        this.playerNames.forEach((name) => {
            this.players.push(new Player(name));
        });
    }

    isGameOver() {
        let isGameOver = false;

        this.players.forEach((player) => {
            if (player.territories >= this.numTerritoriesToWin)
                isGameOver = true;
        });

        return isGameOver;
    }

    startNewBattle() {
        if (!this.isGameOver()) {
            this.battle = new Battle(this.players, this.board, this.dealer, this.goesFirst);
            this.dealer.shuffleDeck();
            this.dealer.dealCardsToAllPlayers(3);
        } else {
            return { message: `Game is Over!` };
        }
    }

}