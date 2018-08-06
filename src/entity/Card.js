class Card {
    constructor(type, attackValue) {
        this.type = type;


        switch (type) {
            case 'mercenary':
                this.attackValue = attackValue;
                this.isSpecial = false;
                break;
            case 'courtesan':
                this.attackValue = 1;
                this.isSpecial = true;
                break;
            case 'heroine':
                this.attackValue = 10;
                this.isSpecial = true;
                break;
            default:
                this.attackValue = 0;
                this.isSpecial = true
        }
    }

    equalsCard(card) {
        return this.type === card.type && this.attackValue === card.attackValue;
    }
}

module.exports = Card;