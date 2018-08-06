const BattleLine = require('./BattleLine.js');
const Hand = require('./Hand.js');
// const readline = require('readline');
// const r1 = readline.createInterface(process.stdin, process.stdout);

class Player {
    constructor(name) {
        this.name = name;
        this.hand = new Hand();
        this.battleLine = new BattleLine();
        this.hasPassed = false;
        this.question = this.question.bind(this);

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

    hasMaxCards() {
        return this.hand.getSize() >= this.hand.getMaxSize();
    }

    addCardToBattleLine(card) {
        if (!this.hasPassed) {
            const removedCard = this.hand.removeCard(card);

            if (removedCard.type)
                this.battleLine.addCardToLine(removedCard);
            else
                throw new Error(`card: {${type}, ${attackValue}} cannot be added to line!`);
        } else {
            throw new Error(`${this.name} has passed and cannot add card to BattleLine.`)
        }
    }

    getTotalAttack() {
        return this.battleLine.calculateTotalAttack();
    }
}

module.exports = Player;