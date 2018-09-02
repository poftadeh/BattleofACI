const Game = require('./src/entity/Game.js')
const BattleOfACI = require('./frontend/components/BattleOfACI.js')
const React = require('react')
const ReactDOM = require('react-dom')

class Session extends React.Component {
    constructor(props) {
        super(props);
        this.game = new Game(['P1', 'P2']);
        this.onAction = this.onAction.bind(this);
        this.state = {
            players: this.game.players,
        }
    }

    onAction(player, action, type, attackValue, swapCardType, swapCardAttackValue) {
        this.game.action(player, action, type, attackValue, swapCardType, swapCardAttackValue);
        this.setState(() => ({players: this.game.players}));
    }

    render() {
        return (
            <div>
                <BattleOfACI
                    players={this.state.players}
                    onAction={this.onAction}
                />
            </div>
        );
    }
}

ReactDOM.render(<Session />, document.getElementById('root'));