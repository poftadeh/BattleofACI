const React = require('react');
const BattleLine = require('./BattleLine.js')

class Board extends React.Component {
  render() {
    return (
      <div>
        {this.props.players.map((player) => (
          <BattleLine 
            key={player.name} 
            cards={player.battleLine.line} 
            score={player.battleLine.totalAttack}
          />
        ))}
      </div>
    );
  }
}

module.exports = Board;