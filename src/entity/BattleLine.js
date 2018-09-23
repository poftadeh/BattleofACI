class BattleLine {
    constructor() {
        this.line = [];
        this.totalAttack = 0;
        this.highestAttackValue = 0;
        this.highestAttackCards = [];
        this.hasSpringBonus = false;
        this.hasDrummer = this.hasDrummer.bind(this);
        this.calculateTotalAttack = this.calculateTotalAttack.bind(this);
    }

    resetBattleLine() {
        const discards = this.line.slice();
        this.line = [];
        this.totalAttack = 0;
        this.highestAttackCards = [];
        this.highestAttackValue = 0;
        this.hasSpringBonus = undefined;
        this.season = undefined;

        return discards;
    }

    addCardToLine(card) {
        this.line.push(card);
        this.calculateTotalAttack();
    }

    destroyHighestCards() {
        const removedCards = [];
        const tempLine = this.line.slice(); // removing cards interferes with the logic so use a temp.

        for (let i of tempLine) {
            if (this.highestAttackCards.includes(i)) {
                removedCards.push(i);
                this.line.splice(this.line.indexOf(i), 1);
            }
        }

        this.calculateTotalAttack();
        return removedCards;
    }

    removeCardFromLine(type, attackValue) {
        let removedCard;

        for (let i = 0; i < this.line.length; i++) {
            if (this.line[i].type === type
                && this.line[i].attackValue === attackValue
            ) {
                removedCard = this.line.splice(i, 1).pop();
                break;
            }
        }

        this.calculateTotalAttack();
        return removedCard;
    }

    getHighestAttackCard() {
        return this.highestAttackCard;
    }

    getHighestAttackValue() {
        return this.highestAttackValue;
    }

    toggleSpringBonus(bool) {
        if (bool === true && this.season === "spring") {
            this.hasSpringBonus = true;
        }
        else if (!bool) {
            this.hasSpringBonus = false;
        }
        else {
            throw new Error(`Spring Bonus could not be set to ${bool} during ${this.season}`);
        }

        this.calculateTotalAttack();
    }

    setSeason(season) {
        if (season !== "winter" && season !== "spring") {
            throw new Error(`${season} is not a valid season`);
        }

        this.season = season;
        this.calculateTotalAttack();
    }

    hasDrummer() {
        for (let i of this.line) {
            if (i.type === "drummer")
                return true;
        }

        return false;
    }

    calculateTotalAttack() {
        this.totalAttack = 0;
        this.highestAttackValue = 0;
        this.highestAttackCards = [];

        this.line.forEach((card) => {
            let attackValue = card.attackValue;
            if (!card.isSpecial) {
                if (this.season === "winter") {
                    attackValue = 1;
                }

                if (this.hasDrummer()) {
                    attackValue *= 2;
                }
                
                if (attackValue > this.highestAttackValue) {
                    this.highestAttackValue = attackValue;
                    this.highestAttackCards = [card];
                } else if (attackValue === this.highestAttackValue) {
                    this.highestAttackCards.push(card);
                }
                
            }
            this.totalAttack += attackValue;
        });


        // give +3 attack for all highest attack cards in Spring
        //
        if (this.season === 'spring' && this.hasSpringBonus) {
            this.totalAttack += (this.highestAttackCards.length * 3);
        }

        return this.totalAttack;
    }
}

module.exports = BattleLine;