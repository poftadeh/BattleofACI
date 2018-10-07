import React from 'react';
import HandCard from './HandCard.js';

class Hand extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.cards);
    }

    render() {
        return (
            <div className="hand">
                {this.props.cards.map((card, i) => (
                    (i <= 4) && <HandCard
                        key={card.type + i}
                        player={this.props.player}
                        type={card.type}
                        attackValue={card.attackValue}
                        onAction={this.props.onAction}
                        toggleScarecrowSelected={this.props.toggleScarecrowSelected}
                    />
                ))}
            </div>
        );
    }

}

export default Hand;