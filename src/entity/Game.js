const Battle = require('./Battle.js');
const Dealer = require('./Dealer.js');
const Board = require('./Board.js');
const Player = require('./Player.js');

class Game {
    constructor(playerNames, numTerritoriesToWin) {
        this.playerNames = playerNames;
        this.players = [];
        this.numTerritoriesToWin = numTerritoriesToWin || 4;
        this.getState = this.getState.bind(this);
        this.getPlayerTurn = this.getPlayerTurn.bind(this);
        this.startNewGame();
    }

    getState() {
        return JSON.stringify(Object.assign(this, {"playerToAct": this.getPlayerTurn(), "isGameOver": this.isGameOver()}));
    }

    startNewGame() {
        this.createPlayers();
        this.board = new Board(this.players);
        this.goesFirst = this.players[Math.floor(Math.random() * this.players.length)];
        this.dealer = new Dealer();
        this.dealer.shuffleDeck();
        this.dealer.dealCardsToAllPlayers(this.players, 7);
        this.startNewBattle();
    }

    action(player, action, type, attackValue, swapCardType, swapCardAttackValue) {
        if (player === this.getPlayerTurn()) {
            this.battle.turn(player, action, type, attackValue, swapCardType, swapCardAttackValue);
        } else{
            //throw new Error(`Not ${player.name}'s turn to act! ${this.getPlayerTurn().name} must play.`);
        }

        if (this.battle.winner) {
            this.postBattleCleanup();
            this.startNewBattle();
        }
    }

    findPlayerToActFirst() {
        let highestCourtesanCount = -1;
        let playersWithMostCourtesans = [];

        this.players.forEach((player) => {
            let playerCourtesanCount = 0;
            player.battleLine.line.forEach((card) => {
                if (card.type === "courtesan") 
                    playerCourtesanCount++;
            });

            if (playerCourtesanCount > highestCourtesanCount) {
                highestCourtesanCount = playerCourtesanCount;
                playersWithMostCourtesans = [player];
            } else if (playerCourtesanCount === highestCourtesanCount) {
                playersWithMostCourtesans.push(player);
            }
        });
        
        if (playersWithMostCourtesans.length === 1) {
            this.goesFirst = playersWithMostCourtesans.pop();
        } else if (playersWithMostCourtesans.length > 1) {
            this.goesFirst = playersWithMostCourtesans[Math.floor(Math.random() * playersWithMostCourtesans.length)]
        } else if (this.winner && this.winner.length === 1) {
            this.goesFirst = this.winner;
        } else {
            this.goesFirst = this.players[Math.floor(Math.random() * this.players.length)]
        }
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
            if (player.numTerritories >= this.numTerritoriesToWin)
                isGameOver = true;
        });

        return isGameOver;
    }

    startNewBattle() {
        if (!this.isGameOver()) {
            this.battle = new Battle(this.players, this.board, this.dealer, this.goesFirst);
        } else {
            throw new Error( `Game is already over!`);
        }
    }

    postBattleCleanup() {
        this.findPlayerToActFirst();
        this.dealer.collectDiscards(this.board.resetBattleLines());
        this.dealer.mergeDiscardsWithDeck();
        this.players.forEach((player) => player.hasPassed = false);
        this.board.season = undefined;
        this.dealer.shuffleDeck();
        this.dealer.dealCardsToAllPlayers(this.players, 3);
    }

}

module.exports = Game