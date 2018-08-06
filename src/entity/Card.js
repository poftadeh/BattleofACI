class Card {
    constructor(type,attackValue, isSpecial) {
        this.type = type;
        this.attackValue = attackValue;
        this.isSpecial = isSpecial;
    }

    equalsCard(card) {
        return this.type === card.type && this.attackValue === card.attackValue;
    }
}

module.exports = Card;