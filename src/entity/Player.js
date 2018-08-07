const BattleLine = require('./BattleLine.js');
const Hand = require('./Hand.js');
const Card = require('./Card.js');
// const readline = require('readline');
// const r1 = readline.createInterface(process.stdin, process.stdout);

class Player {
    constructor(name, territories) {
        this.name = name;
        this.hand = new Hand();
        this.battleLine = new BattleLine();
        this.hasPassed = false;
        this.territories = territories || 0;
    }

    // turn() {
    //     let choice;

    //     this.question()
    //         .then((a1) => {
    //             choice = a1;
    //             console.log(choice, choice[0], choice[1]);
    //             this.addCardToBattleLine(choice[0], choice[1]);
    //         })
    //         .catch((err) => console.log(err));

    // }

    // promptPlayer(question) {
    //     question();
    // }

    // question() {
    //     return new Promise((resolve, reject) => {
    //         r1.question('Enter card: ', (answer) => {
    //             r1.close();
    //             resolve(answer.split(' '));
    //         });
    //     });
    // }

    addTerritory() {
        this.territories++;
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

module.exports = Player;