const Deck = require('./Deck.js');
const Player = require('./Player.js');

class Dealer {
    constructor() {
        this.deck = new Deck();
    }

    dealCardToPlayer(player) {
        if (!player.hasMaxCards()) {
            const card = this.deck.drawCard();
            player.hand.addCard(card);
        }
    }
}

module.exports = Dealer;