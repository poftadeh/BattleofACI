const React = require('react');

const Card = (props) => {
    return (
        <div>
            <p>{props.card.type}</p>
            <p>{props.card.attackValue}</p>
        </div>
    );
}

module.exports = Card;