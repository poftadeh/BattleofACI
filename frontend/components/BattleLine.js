const React = require('react');
const Card = require('./Card.js');

class BattleLine extends React.Component {
  render() {
    return (
      <div>
        {this.props.cards.map((card, i) => {
          <Card
            key={card + i}
            type={card.type}
            attackValue={card.attackValue}
          />
        })}
      </div>
    );
  }
}



module.exports = BattleLine;