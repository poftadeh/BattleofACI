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

    dealSpecificCardToPlayer(player, card) {
        if (!player.hasMaxCards()) {
            player.hand.addCard(card);
        }
    }

    dealCardsToAllPlayers(players, numOfCards) {
        for(let i = 0; i < numOfCards; i++) 
            this.players.forEach((player) => this.dealer.dealCardToPlayer(player));
    }
}

module.exports = Dealer;