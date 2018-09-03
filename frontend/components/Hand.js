const React = require('react');
const HandCard = require('./HandCard.js');

class Hand extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.cards);
    }

    render() {
        return (
            <div className="card-row">
                {this.props.cards.map((card, i) => (
                    <HandCard
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

module.exports = Hand;