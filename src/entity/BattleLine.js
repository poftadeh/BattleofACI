class BattleLine {
    constructor() {
        this.season;
        this.line = [];
        this.totalAttack = 0;
        this.highestAttackValue = 0;
        this.highestAttackCards = [];
        this.hasSpringBonus = false;
        this.hasDrummer = this.hasDrummer.bind(this);
        this.calculateTotalAttack = this.calculateTotalAttack.bind(this);
    }

    resetBattleLine() {
        this.line = [];
        this.totalAttack = 0;
        this.highestAttackCards = [];
        this.highestAttackValue = 0;
        this.hasSpringBonus = undefined;
        this.season = undefined;
    }

    addCardToLine(card) {
        this.line.push(card);
        this.calculateTotalAttack();

        // if (["drummer", "mercenary", "courtesan", "heroine"]
        //     .includes(card.type)) {
        //     this.line.push(card);
        //     this.calculateTotalAttack();
        // } else {
        //     throw new Error(`${card.type} cannot be added to line`)
        // }

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

    removeCardsFromLine(card) {
        const removedCards = [];

        for (let i of this.line) {
            if (i.equalsCard(card))
                removedCards.push(i);
        }

        this.line = this.line.filter((lineCard) => {
            return !lineCard.equalsCard(card);
        });

        this.calculateTotalAttack();

        return removedCards;
    }

    getHighestAttackCard() {
        return this.highestAttackCard;
    }

    getHighestAttackValue() {
        return this.highestAttackValue;
    }

    setSpringBonus(bool) {
        if (bool == true && this.season === "spring") {
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
        if (season !== "winter" && season !== "summer") {
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

            if (!card.isSpecial && this.season === "winter") {
                attackValue = 1;
            }

            if (!card.isSpecial && this.hasDrummer()) {
                attackValue *= 2;
            }

            if (!card.isSpecial && attackValue >= this.highestAttackValue) {
                this.highestAttackValue = attackValue;
                this.highestAttackCards.push(card);
            }

            this.totalAttack += attackValue;
        });

        if (this.hasSpringBonus) {
            this.totalAttack += 3
        }

        return this.totalAttack;
    }
}

module.exports = BattleLine;