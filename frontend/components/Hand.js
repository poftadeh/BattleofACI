const React = require('react');
const Card = require('./Card.js');

class Hand extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.cards);
    }

    render() {
        return (
            <div className="player-hand">
                {this.props.cards.map((card, i) => (
                    <Card
                        key={card.type + i}
                        type={card.type}
                        attackValue={card.attackValue}
                        onAction={this.props.onAction}
                    />
                ))}
            </div>
        );
    }

}

module.exports = Hand;