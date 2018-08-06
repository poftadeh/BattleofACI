const Battle = require('../src/entity/Battle.js');
const Dealer = require('../src/entity/Dealer.js');
const Player = require('../src/entity/Player.js');
const Card = require('../src/entity/Card.js');
const Board = require('../src/entity/Board.js');

class BattleTester {
    constructor() {
        this.players = [];
        this.dealer = new Dealer();
        
        for (let i = 1; i <= 4; i++)
            this.players.push(new Player(`Player ${i}`));

        this.board = new Board(this.players);

        this.battle = new Battle(this.players, this.board, this.dealer, this.players[0]);
        //this.dealer.dealCardsToAllPlayers(1);
        this.dealer.dealSpecificCardToPlayer(this.players[0], new Card("mercenary", 10, false))
        this.dealer.dealSpecificCardToPlayer(this.players[0], new Card("mercenary", 10, false))
        this.dealer.dealSpecificCardToPlayer(this.players[0], new Card("bishop", 0, true))
        this.dealer.dealSpecificCardToPlayer(this.players[0], new Card("heroine", 10, true))
        this.dealer.dealSpecificCardToPlayer(this.players[0], new Card("winter"))
        this.dealer.dealSpecificCardToPlayer(this.players[1], new Card("mercenary", 10, false))
        this.dealer.dealSpecificCardToPlayer(this.players[1], new Card("mercenary", 10, false))
        this.dealer.dealSpecificCardToPlayer(this.players[1], new Card("bishop", 0, true))
        this.dealer.dealSpecificCardToPlayer(this.players[1], new Card("heroine", 10, true))
        this.dealer.dealSpecificCardToPlayer(this.players[1], new Card("winter"))
        this.battle.turn(this.players[0], "play", "mercenary", 10)
        this.battle.turn(this.players[0], "play", "mercenary", 10)
        this.battle.turn(this.players[1], "play", "mercenary", 10)
        this.battle.turn(this.players[1], "play", "mercenary", 10)
        // this.battle.turn(this.players[0], "play", "heroine")
        // this.battle.turn(this.players[0], "play", "winter");
        // this.battle.turn(this.players[0], "play", "bishop");

        console.log(JSON.stringify(this.players[0]));
        console.log(JSON.stringify(this.players[1]));
        // this.battle.turn(this.player[0], this.player.)
    
    }
}

module.exports = BattleTester;