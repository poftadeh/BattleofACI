const Deck = require('../src/entity/Deck.js');

class DeckTester {
    constructor() {
        const deck = new Deck();
        deck.assembleDeck();
        deck.printCards();
    }
}

module.exports = DeckTester;