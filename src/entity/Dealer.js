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

    collectDiscards(cards) {
       this.deck.addToDiscards(cards); 
    }

    dealCardsToAllPlayers(players, numOfCards) {
        for(let i = 0; i < numOfCards; i++) 
            players.forEach((player) => this.dealCardToPlayer(player));
    }

    mergeDiscardsWithDeck() {
        this.deck.cards = this.deck.cards.concat(this.deck.discards);
        this.deck.discards = [];
        this.shuffleDeck();
    }
    
    shuffleDeck() {
        this.deck.shuffle();
    }
}

module.exports = Dealer;