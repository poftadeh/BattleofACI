const React = require('react');
const Card = require('./Card.js');

class BattleLine extends React.Component {
  render() {
    return (
      <div className="card-row">
        {this.props.cards.map((card, i) => {
          return <Card
            key={card.type + i}
            type={card.type}
            attackValue={card.attackValue}
          />
        })}
        <div>{this.props.score}</div>
      </div>
    );
  }
}



module.exports = BattleLine;