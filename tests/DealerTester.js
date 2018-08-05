const Dealer = require('../src/entity/Dealer.js');
const Player = require('../src/entity/Player.js');
const Board = require('../src/entity/Board.js');

class DealerTester {
    constructor() {
        this.players = [];
        this.dealer = new Dealer();
        
        for (let i = 1; i <= 4; i++)
            this.players.push(new Player(`Player ${i}`));

        this.board = new Board(this.players);

        this.board.dealCards(10);
        this.board.displayPlayers();

    }
}

module.exports = DealerTester;