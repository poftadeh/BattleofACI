import React from 'react';
import BattleLine from './BattleLine.js';

class Board extends React.Component {
  render() {
    return (
      <div>
        {this.props.players.map((player) => (
          <BattleLine 
            key={player.name} 
            player={player}
            cards={player.battleLine.line} 
            score={player.battleLine.totalAttack}
            scarecrowSelected={this.props.scarecrowSelected}
            onAction={this.props.onAction}
            toggleScarecrowSelected={this.props.toggleScarecrowSelected}
          />
        ))}
      </div>
    );
  }
}

export default Board;