const BattleLine = require('./BattleLine.js');
const Hand = require('./Hand.js');

class Player {
    constructor(name) {
        this.name = name;
        this.hand = new Hand();
        this.battleLine = new BattleLine();
        this.hasPassed = false;
    }

    hasMaxCards() {
        return this.hand.getSize() >= this.hand.getMaxSize();
    }

    addCardToBattleLine(type, attackValue) {
        const removedCard = this.hand.removeCardByString(type, attackValue);
        
        if (removedCard.type)
            this.battleLine.addCardToLine(removedCard);
        else   
            throw new Error(`card: {${type}, ${attackValue}} cannot be added to line!`);
    }

    getTotalAttack() {
        return this.battleLine.calculateTotalAttack();
    }
}

module.exports = Player;