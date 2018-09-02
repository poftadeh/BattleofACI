const React = require('react');
const Card = require('./Card.js');

class Hand extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.cards);
    }

    onAction(e) {
        console.log(e, e.target);
        this.props.onAction(this.props.player, 'play', this.props.type, this.props.attackValue);
    }

    render() {
        return (
            <div className="card-row">
                {this.props.cards.map((card, i) => (
                    <Card
                        key={card.type + i}
                        player={this.props.player}
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