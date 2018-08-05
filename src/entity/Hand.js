const Card = require('./Card.js');

class Hand {
    constructor() {
        this.cards = [];
        this.maxSize = 10;
        this.getMaxSize = this.getMaxSize.bind(this);
        this.addCard = this.addCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
    }

    addCard(card) {
        this.cards.push(card);
    }

    findCardIndex(card) {
        let cardIndex = -1;

        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].type === card.type
                && this.cards[i].attackValue === card.attackValue
            ) {
                return cardIndex = i;
            } 
        }

        return cardIndex;
    }

    // returns the removed card
    //
    removeCard(card) {
        const cardIndex = this.findCardIndex(card);

        if (cardIndex != -1) {
           return this.cards.splice(cardIndex, 1).pop();
        } else {
            throw new Error(`card: ${card} cannot be removed as it is not found.`)
        }
    }
    
    removeCardByString(type, attackValue) {
        const card = {
            type: type,
            attackValue: attackValue,
        }

        return this.removeCard(card);
    }

    getCardByPosition(position) {
        return this.cards[position];
    }

    getSize() {
        return this.cards.length;
    }

    getMaxSize() {
        return this.maxSize;
    }

    setMaxSize(size) {
        return (
            typeof (size) == 'number' ?
                this.maxSize = size : `${size} is not a valid max size`
        );
    }

}

module.exports = Hand;