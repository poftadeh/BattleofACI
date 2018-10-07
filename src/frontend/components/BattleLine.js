import React from 'react';
import BattleLineCard from './BattleLineCard.js';

class BattleLine extends React.Component {
  render() {
    return (
      <div className="card-row">
        {this.props.cards.map((card, i) => (
          <BattleLineCard
            key={card.type + i}
            type={card.type}
            attackValue={card.attackValue}
            scarecrowSelected={this.props.scarecrowSelected}
            onAction={this.props.onAction} 
            player={this.props.player}
            toggleScarecrowSelected={this.props.toggleScarecrowSelected}
          />
        ))}
        <div>{this.props.score}</div>
      </div>
    );
  }
}



export default BattleLine;