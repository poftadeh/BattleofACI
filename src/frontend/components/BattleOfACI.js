import TurnControls from './common/TurnControls';
import React from 'react';
import Hand from './Hand.js';
import Board from './Board.js';

class BattleofACI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players,
      scarecrowSelected: false,
    }
    console.log(this.state.players)
    this.setSwapCard = this.setState.bind(this);
    this.toggleScarecrowSelected = this.toggleScarecrowSelected.bind(this);
  }

  toggleScarecrowSelected(bool) {
    this.setState(() =>({scarecrowSelected: bool}));
  }

  render() {
    return (
      <div>
        <Board
          players={this.state.players}
          scarecrowSelected={this.state.scarecrowSelected}
          onAction={this.props.onAction}
          toggleScarecrowSelected={this.toggleScarecrowSelected}
        />
        <br />
        {this.state.players.map((player, i) => (
          <div key={player.name}>
            <div>Player: {player.name} Territories: {player.numTerritories}</div>
            <Hand
              player={player}
              cards={player.hand.cards}
              onAction={this.props.onAction}
              toggleScarecrowSelected={this.toggleScarecrowSelected}
            />
            <TurnControls />
        </div>
        ))}
        <br />
        {`Turn: ${this.props.turn.name}`}
      </div>
    );
  }


}

export default BattleofACI;
