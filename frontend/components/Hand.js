const React = require('react');
const Card = require('./Card.js');

class Hand extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        <div>
            {this.props.cards.map((newCard) => (
                <Card
                    key={newCard}
                    card={newCard}
                />
            ))}
        </div>
    }

}

module.exports = Hand;