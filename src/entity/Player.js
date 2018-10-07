import BattleLine from './BattleLine.js';
import Hand from './Hand.js';
import Card from './Card.js';

class Player {
    constructor(name, numTerritories) {
        this.name = name;
        this.hand = new Hand();
        this.battleLine = new BattleLine();
        this.hasPassed = false;
        this.numTerritories = numTerritories || 0;
    }

    addTerritory() {
        this.numTerritories++;
        this.hand.incrementMaxSize();
    }

    hasAnyCards() {
        return this.hand.getSize() > 0;
    }

    hasMaxCards() {
        return this.hand.getSize() >= this.hand.getMaxSize();
    }

    addCardToBattleLine(type, attackValue) {
        const card = new Card(type, attackValue);

        if (!this.hasPassed) {

            // remove card from hand first
            const removedCard = this.hand.removeCard(card);

            if (removedCard) {
                this.battleLine.addCardToLine(removedCard);
            } else {
                throw new Error(`Can't add card to battle line that doesn't exist in hand`);
            }
        } else {
            throw new Error(`${this.name} has passed and cannot add card to BattleLine.`);
        }
    }

    getTotalAttack() {
        return this.battleLine.calculateTotalAttack();
    }
}

export default Player;