import React from 'react';
import HandCard from './HandCard.js';
import TurnControls from './common/TurnControls';

class Hand extends React.Component {
    constructor(props) {
        super(props);
        this.firstCardIndex = 0;
        this.lastCardIndex = 4;
        console.log(this.props.cards);
    }

    shiftIndex(direction) {
        if (direction === 'right' && this.lastCardIndex < this.props.cards.length) {
            this.firstCardIndex++;
            this.lastCardIndex++;
        } else if (direction === 'left' && this.firstCardIndex > 0) {
            this.firstCardIndex--;
            this.lastCardIndex--;
        } else {
            throw new Error('Invalid direction!');
        }
    }

    render() {
        return (
            <div>
                <div className="hand">
                    {this.props.cards.map((card, i) => (
                        (i >= this.firstCardIndex && i <= this.lastCardIndex)
                        && <HandCard
                            key={card.type + i}
                            player={this.props.player}
                            type={card.type}
                            attackValue={card.attackValue}
                            onAction={this.props.onAction}
                            toggleScarecrowSelected={this.props.toggleScarecrowSelected}
                        />
                    ))}
                </div>
                <TurnControls />
            </div>
        );
    }

}

export default Hand;