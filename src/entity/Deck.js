const Card = require('./Card.js');

const NUM_WINTER = 3;
const NUM_SPRING = 3;
const NUM_BISHOP = 6;
const NUM_COURTESAN = 12;
const NUM_DRUMMER = 6;
const NUM_HEROINE = 3;
const NUM_SCARECROW = 16;
const NUM_SURRENDER = 3;
const NUM_ONE_ATTACK_MERC = 10;
const NUM_NON_ONE_ATTACK_MERC = 8;

class Deck {
    constructor() {
        this.cards = [];
        this.assembleDeck = this.assembleDeck.bind(this);
        this.addCards = this.addCards.bind(this);
        this.assembleDeck();
    }

    addCards(type, attackValue, isSpecial, numberOfCards) {
        for (let i = 0; i < numberOfCards; i++)
            this.cards.push(
                new Card(type, attackValue, isSpecial)
            )
    }

    assembleDeck() {
        const cards = [];
        this.addCards("winter", 0, true, NUM_WINTER);
        this.addCards("spring", 0, true, NUM_SPRING);
        this.addCards("bishop", 0, true, NUM_BISHOP);
        this.addCards("drummer", 0, true, NUM_DRUMMER);
        this.addCards("scarecrow", 0, true, NUM_SCARECROW);
        this.addCards("surrender", 0, true, NUM_SURRENDER);
        this.addCards("drummer", 0, true, NUM_DRUMMER);
        this.addCards("heroine", 10, true, NUM_HEROINE);
        this.addCards("courtesan", 1, true, NUM_COURTESAN);
        this.addCards("mercenary", 1, false, NUM_ONE_ATTACK_MERC);

        for (let i = 2; i <= 6; i++)
            this.addCards("mercenary", i, false, NUM_NON_ONE_ATTACK_MERC);

    }

    drawCard() {
        return this.cards.pop();
    }

    printCards() {
        for (let i of this.cards) {
            console.log(i);
        }
    }
}

module.exports = Deck;