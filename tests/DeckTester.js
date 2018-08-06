const Deck = require('../src/entity/Deck.js');

class DeckTester {
    constructor() {
        const deck = new Deck();
        deck.printCards();
    }
}

module.exports = DeckTester;