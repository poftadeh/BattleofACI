const React = require('react');
const Hand = require('./Hand.js');
const Board = require('./Board.js')

class BattleofACI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.players,
    }
    console.log(this.state.players)
  }

  render() {
    return (
      <div>
        <Board
          players={this.state.players}
        />
        {this.state.players.map((player) => (
          <Hand
            key={player.name}
            player={player}
            cards={player.hand.cards}
            onAction={this.props.onAction}
          />
        ))}
      </div>
    );
  }


}

module.exports = BattleofACI;
