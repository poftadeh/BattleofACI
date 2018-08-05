class BattleLine {
    constructor() {
        this.season;
        this.line = [];
        this.totalAttack = 0;
        this.highestAttackValue = 0;
        this.highestAttackCard;
        this.hasSpringBonus = false;
        this.hasDrummer = this.hasDrummer.bind(this);
        this.calculateTotalAttack = this.calculateTotalAttack.bind(this);
    }

    resetBattleLine() {
        this.line = [];
        this.totalAttack = 0;
        this.highestAttackCard = undefined;
        this.highestAttackValue = 0;
        this.hasSpringBonus = undefined;
        this.season = undefined;
    }

    addCardToLine(card) {
        if (["drummer", "mercenary", "courtesan", "heroine"]
            .includes(card.type)) {
            this.line.push(card);
            this.calculateTotalAttack();
        } else {
            throw new Error(`${card.type} cannot be added to line`)
        }

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
    }

    setSeason(season) {
        if (season !== "winter" && season !== "summer") {
            throw new Error(`${season} is not a valid season`);
        }

        this.season = season;
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
        this.highestAttackCard = null;

        this.line.forEach((card) => {
            let attackValue = card.attackValue;

            if (this.season === "winter" && !card.isSpecial) {
                attackValue = 1;
            }

            if (this.hasDrummer() && !card.isSpecial) {
                attackValue *= 2;
            }

            if (attackValue > this.highestAttackValue) {
                this.highestAttackValue = attackValue;
                this.highestAttackCard = card;
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