const MAX_HAND_SIZE = 10;

class Hand {
    constructor() {
        this.cards = [];
        this.maxSize = MAX_HAND_SIZE;
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
            if (this.cards[i].equalsCard(card)) {
                return cardIndex = i;
            }
        }

        return cardIndex;
    }

    // returns the removed card
    //
    removeCard(card) {
        const cardIndex = this.findCardIndex(card);

        if (cardIndex !== -1)
            return this.cards.splice(cardIndex, 1).pop();
        else
            throw new Error(`card: ${card.type} cannot be removed as it is not found.`)

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

    incrementMaxSize() {
        this.setMaxSize(this.getMaxSize() + 1);
    }

    setMaxSize(size) {
        if (typeof (size) === 'number')
            return this.maxSize = size
        else
            throw new Error(`${size} is not a valid max size`)
    }

}

module.exports = Hand;